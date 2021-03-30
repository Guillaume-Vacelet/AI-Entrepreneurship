# FROM python:3.7-alpine
# WORKDIR /code
# COPY requirements.txt requirements.txt
# RUN pip install -r requirements.txt
# COPY . .
# CMD ["flask", "run"]

FROM python:3.7

RUN apt-get update
RUN apt-get install apt-utils -y \
    && apt install libpq-dev -y \
    && apt install postgresql-client -y \
    && apt install postgresql-client-common -y

WORKDIR /code

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .