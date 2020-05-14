# Start with a Python image.
FROM python:3

# port exposed
EXPOSE 8002

# Some stuff that everyone has been copy-pasting
# since the dawn of time.
ENV PYTHONUNBUFFERED 1


# Copy all our files into the image.
RUN mkdir /django
RUN mkdir /django/epoch
WORKDIR /django
ADD requirements.txt /django/

# Install our requirements.
RUN pip install -r requirements.txt
COPY . /django/epoch/

# command executed at run
CMD ["python", "epoch/manage.py", "runserver", "0.0.0.0:8002"]
