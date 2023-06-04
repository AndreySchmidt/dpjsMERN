mkdir dpjsMERN
cd dpjsMERN
mkdir server
mkdir client

cd server

npm init -y
cd ..

git init
git remote add origin https://github.com/AndreySchmidt/dpjsMERN.git
git branch -M main
git add .
git commit -m 'init'
git push -u origin main

cd server
npm i express mongoose cors bcryptjs dotenv jsonwebtoken
npm i nodemon -D
