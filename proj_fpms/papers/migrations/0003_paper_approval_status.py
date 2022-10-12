# Generated by Django 4.1.2 on 2022-10-12 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0002_alter_paper_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='approval_status',
            field=models.CharField(choices=[('', 'None'), ('approved', 'Approved'), ('pending', 'Pending')], default='pending', max_length=10),
        ),
    ]
