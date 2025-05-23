# Generated by Django 5.2.1 on 2025-05-14 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('department', models.CharField(max_length=50)),
                ('designation', models.CharField(max_length=50)),
                ('salary', models.IntegerField()),
                ('date_of_joining', models.DateField()),
                ('status', models.CharField(default='Active', max_length=20)),
            ],
        ),
    ]
