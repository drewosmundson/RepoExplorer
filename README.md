# RepoExplorer
An application that parses the folder structure of a project extracts all the classes and methods within them and how they interact with each other. A more involved automatic UML diagram is generated from the current state of the project. The intended users of this program are those exploring open source projects and are curious about the system design.






To run this project verify that npm and node are intstalled with

npm -v

node -v

initiate npm package manager accept defaults with -y or --yes flag

npm init -y

install express this is used in this project to simply serve static files to the user. The intendtion of this project is to make into a website where a use may upload any common language git repo and generate a UML diagram.

npm install express