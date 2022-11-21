## FullStackProject: tableau d'affichage Iset 
La consultation des nouveautés affichées à l’ISET (annonces de rattrapage, report d’une séance, 
activité dans l’un des clubs…) par les étudiants est une tâche quotidienne. L’objectif de ce projet 
est d’automatiser cette tache et de permettre à chaque étudiant d’accéder à une application web 
SPA (Single Page Application) qui lui permet, à son tour, de bénéficier de services suivants : 
- consultation des emploi de temps 
- consultation des annonces des activités des clubs à l’ISET  
- consultation des annonces de rattrapage  
- consultation des annonces de report des séance  
- envoiyer et recevoir les documents nécessité …
- communication avec l'administrateur
- l'administrateur capable d'ajouter le privilège d'inscrit dans cette platform et le responsable de mangement utilisateur
- l'administrateur ajouter des affiches vers tous les etudiants
- chef departement ajouter des affiches et emplois du temps vers les etudiants inscrit dans leur department 
- cette application port une authentification JWT 
## Installation

### Client
```

Go in the `client` directory, and run the following:

```
npm install
```

### Run

```npm start
```

### Server


Go in the `serveur` directory, then run the following:

```
npm install
```

### Run

Run the following in the terminal:

```
node index.js
```

This will create a server listening on port 5000, you can access it from http://localhost:5000/. The server needs to run at all time when you use the client.

# Technologies
- React
- Node
- Express
- jsonwebtoken
- mysql
- sequelize
- bcryp

# secreen shot (All Screens to the project in SecreenShot directory)

### Lounding Page
![](https://github.com/thamerh/Tableau-d-affichage-iset/blob/main/SecreenShot/LoundingPage.png)
### Dashboard Admin
![](https://github.com/thamerh/Tableau-d-affichage-iset/blob/main/SecreenShot/Admin/dashboardAdmin.png)
### Dashboard Student
![](https://github.com/thamerh/Tableau-d-affichage-iset/blob/main/SecreenShot/Student/DashboardStudent1.png)
### Dashboard Chef Department
![](https://github.com/thamerh/Tableau-d-affichage-iset/blob/main/SecreenShot/Chef%20Department/DashboardChefDep.png)

## Made By

- [@thamerh](https://github.com/thamerh)

