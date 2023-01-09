from rest_framework import serializers
from .models import User, Profile
from django.contrib.auth import authenticate


class ProfileSerializer(serializers.ModelSerializer):
    # image_path = serializers.SerializerMethodField('get_image_path')

    class Meta:
        model = Profile
        fields = ('full_name', 'image',
                  'post','department', 'institute', 'address','website')

    # def get_image_path(self, obj):
    #     return obj.image.url


class UserSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'profile')

    def get_profile(self, obj):
        try:
            profile = obj.profile
            return ProfileSerializer(profile).data
        except:
            return None


class RegisterSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        profile_data = validated_data.pop('profile')
        profile = Profile.objects.create(
            user=user,
            full_name=profile_data['full_name'],
            # image=profile_data['image'],
            post=profile_data['post'],
            department = profile_data['department'],
            institute=profile_data['institute'],
            address=profile_data["address"],
            website=profile_data["website"]
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    #email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid Credentials")


class ResetPassSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, data):
        user = User.objects.get(email = data['email'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid Credentials")



class PassChangeSerializer(serializers.Serializer):
    username = serializers.CharField()
    otp = serializers.CharField()
    newPass = serializers.CharField()

    def validate(self, data):
        user = User.objects.get(username = data['username'])
        if user and user == User.objects.get(otp = data['otp']):
            return user
        raise serializers.ValidationError("Invalid Credentials")