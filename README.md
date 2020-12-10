# OvarianCancerApp
A mobile application that takes inputs such as symptoms and tests from doctors. It uses a neural network to determine the best course of action. This app continuously learns and hopefully be able to determine the likely hood of a patient having ovarian cancer.

To run this app from scratch type this into your cli.

Start by cloning the repository:
`git clone https://github.com/mmont429/OvarianCancerApp`

Switch to the App directory:
`cd ovariancancerapp/app`

Start the app
`expo start`

__You may be asked to download some dependencies__ which you can do with:
`npm install expo-cli` or `yarn add ...`


You must install amplify globally `npm i -g @aws-amplify/cli`
and then locally `npm install --save aws-amplify aws-amplify-react-native`
to run the login portion of the code.
