# Generated by Django 2.2.14 on 2022-12-05 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20221130_1140'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='website',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(blank=True, default='default.jpg', upload_to='profile_pics', verbose_name='Image'),
        ),
    ]
