from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
        # Can specify specific fields from Database table by instead doing something like
        # fields = ['body, 'updated'] # leaving out the 'created' column.
