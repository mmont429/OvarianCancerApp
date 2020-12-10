# OvarianCancerApp
A mobile application that takes inputs such as symptoms and tests from doctors. It uses a neural network to determine the best course of action. This app continuously learns and hopefully be able to determine the likely hood of a patient having ovarian cancer.

## __Please read the following all of the following documentation before you try to run the app. If you have any issues let me know with a screenshot and I can try to help you.__

Start by cloning the repository:
`git clone https://github.com/mmont429/OvarianCancerApp`

Switch to the App directory:
`cd ovariancancerapp/app`

_If you don't have expo you will need to download the cli globally_
`npm install expo-cli --global`

Start the app
`expo start`

__You may be asked to download some dependencies__ which you can do with:
`npm install expo-cli` or `yarn add ...`

You must install amplify globally 
`npm i -g @aws-amplify/cli`

and then locally 
`npm install --save aws-amplify aws-amplify-react-native`

to run the login portion of the code.

When in doubt, if an unknown error occurs, you can try to
`expo r -c` (`expo r` is just a shortcut to `expo start` and `-c` clears the cache)
