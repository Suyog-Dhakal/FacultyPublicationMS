from django.http import JsonResponse
from .models import Paper
from .serializers import PaperSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json
import ast
# Create your views here.


@api_view(['GET'])
def paper_list(request):

  if request.method == 'GET':
    adminviewpapers = Paper.objects.exclude(approval_status="approved")
    serializer = PaperSerializer(adminviewpapers, many=True)
    return JsonResponse({'paper detail':serializer.data})


@api_view(['GET'])
def paper_analytics(request):

  if request.method == 'GET':
    allpapers = Paper.objects.all()
    serializer = PaperSerializer(allpapers, many=True)
    return JsonResponse(serializer.data)



@api_view(['GET','PUT', 'DELETE'])
def paper_detail(request, id):

  try:
    paper = Paper.objects.get(pk=id)
  except Paper.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    serializer = PaperSerializer(paper)
    return Response(serializer.data)

  elif request.method =='PUT':
    serializer = PaperSerializer(paper, data=ast.literal_eval(request.data))
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    paper.delete()
    return Response(status = status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
def paper_analytics(request):
  if request.method == 'GET':
    adminviewpapers = Paper.objects.exclude(approval_status="approved")
    serializer = PaperSerializer(adminviewpapers, many=True)
    return JsonResponse({'paper detail':serializer.data})