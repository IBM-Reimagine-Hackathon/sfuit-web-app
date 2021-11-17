
# SfUIT-FrontEnd

The FrontEnd is completely written using TypeScript. This helps in type checking and it increases code quality greatly.

## The Problem

Since SfUIT is an IoT product there is no proper application that displays data to user flexibility, even the ones which are present do not show data securely.

## The Solution

So, we have created our very own interface to display the user data continuously and securely. This enables the users to access their health parameters seamlessly.

## Table of Contents

__USAGE__

- [Installation]()
- [Starting Up]()


__SCREENS__

- [Login]()
- [Verification]()
- [Register]()
- [Email Verification]()
- [Dashboard]()

# Usage

## Installation

Clone this GitHub repo onto your local machine, open your editor and navigate to the root folder.

Open your terminal and type

```
cd sfuit-web-app
npm i
```

This command will install all the packages required to run the web app on your local machine.

## Starting Up

After the completion of Installation, in the same terminal type

`npm start`

This will start the server and render the web app.

Now continue to browse through the interface seamlessly.

# Screens

## Login

On the Login page, all you need to do is enter your "Credentials" and monitor your health parameters.

Once you submit your "Credentials", it sends a request to the server and verifies your Credentials to check if you are an authorized user or not.

## Verification

On the Verification page, you need to scan the QR code present on __SfUIT__ to verify if the shirt is indeed an actual product.

Once you click on register, it will send a request to the server to check if the device is present in our database to verify the authenticity of the product.

## Register

Only after the verification of the device, it will redirect to the registration page. In here fill all the details to register your details.

Once you submit your details, it sends a request to the server to store all your details, and then it sends an OTP to your registered email to verify your details.

## Email Verification

Once the OTP is sent to your registered email address you will have 5 minutes to enter OTP and verify your credentials to access your health parameters.

## Dashboard

After the user registers and verifies his/her credentials then they can access their parameters seamlessly.

The Dashboard is designed in such a way that anyone can navigate through it easily and understand the interface without any hindrance to them.
