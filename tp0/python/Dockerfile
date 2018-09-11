FROM python:2.7.15

RUN mkdir /usr/app

WORKDIR /usr/app 
#Every command will be executed on that path

COPY app.py .

RUN pip install flask gunicorn

ENTRYPOINT [ "gunicorn", "-w", "1", "app:app", "-b", "0.0.0.0:8000" ]
