from django.urls import path
from rest_framework import routers
from .api import PaperViewSet, SearchView, SearchViewAuthors, SearchViewTitle
from django.contrib import admin
from papers import views


router = routers.DefaultRouter()
router.register('api/papers', PaperViewSet, 'papers')

urlpatterns = router.urls
urlpatterns += [path('api/search/', SearchView.as_view())]
urlpatterns += [path('api/search/authors/', SearchViewAuthors.as_view())]
urlpatterns += [path('api/search/title/', SearchViewTitle.as_view())]
urlpatterns += [path('api/getAllPapers/', views.paper_list)]
#urlpatterns += [path('adminviewpapers/<int:id>', views.paper_detail)]

