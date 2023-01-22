# Generated by Django 4.1.2 on 2023-01-17 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0020_alter_paper_authors'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paper',
            name='DOI',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='SJR_rating',
            field=models.DecimalField(blank=True, decimal_places=3, max_digits=210, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='author_status',
            field=models.CharField(choices=[('', 'None'), ('chief', 'Chief'), ('correspondence', 'Correspondence'), ('co-author', 'Co-Author')], default='chief', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='chapters',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='conference_name',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='edition',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='group',
            field=models.CharField(choices=[('journal', 'Journal'), ('publication', 'Publication'), ('book', 'Book'), ('conference_article', 'Conference Article'), ('report', 'Report'), ('misc_paper', 'Miscellaneous Papers')], max_length=250),
        ),
        migrations.AlterField(
            model_name='paper',
            name='impact_factor_journal',
            field=models.DecimalField(blank=True, decimal_places=3, max_digits=210, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='isbn',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='issn',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='issue',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='level',
            field=models.CharField(choices=[('', 'None'), ('national', 'National'), ('international', 'International')], default='national', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='location',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='pages',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='peer_reviewed',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='publisher',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='volume',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]