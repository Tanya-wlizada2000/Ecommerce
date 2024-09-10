from rest_framework import viewsets
from api.models import ContactForm
from api.serializers import ContactFormSerializer
from django.core.mail import EmailMessage
from rest_framework.response import Response

def send_email(contact_form_data):
    email_subject = 'New Contact Form Submission'
    # print(contact_form_data)
    email_body = (
        f"Name: {contact_form_data['name']}\n"
        f"Phone: {contact_form_data['phone']}\n"
        f"Email: {contact_form_data['email']}\n"
        f"Describe: {contact_form_data['describe']}"
    )
    email = EmailMessage(
        email_subject,
        email_body,
        'ahmad@gmail.com',  # Replace with your sender email address
        ['azadakoofi@gmail.com']  # Replace with your receiver email address
    )
    try:
        email.send()
    except Exception as e:
        print(f"Error sending email: {e}")
    print(email)
    

class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        # Serialize the data of the created contact form
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Send the email with the contact form data
            send_email(serializer.validated_data)
            
        return response
