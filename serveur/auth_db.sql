
   /*Generation Time*/
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Database: `data_base_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `departement`
--

CREATE TABLE departement(
   nom_dep VARCHAR(50),
   PRIMARY KEY(nom_dep)
);
--
-- Table structure for table `donnes_dotorisation` for chef department register
--
CREATE TABLE donnes_dotorisation(
   cin VARCHAR(50),
   code_dautorisation VARCHAR(50),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(cin, code_dautorisation)
   -- FOREIGN KEY(nom_dep) REFERENCES departement(nom_dep)
);
--
-- Table structure for table `classe`
--
CREATE TABLE classe(
   lib_class VARCHAR(50),
   nom_dep VARCHAR(50) NOT NULL,
   PRIMARY KEY(lib_class),
   FOREIGN KEY(nom_dep) REFERENCES departement(nom_dep)
);
--
-- Table structure for table `chef_departement`
--
CREATE TABLE chef_departement(
   id VARCHAR(50),
   name VARCHAR(50) unique,
   email VARCHAR(50) unique,
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   code_dautorisation VARCHAR(50) NOT NULL,
   nom_dep VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(cin, code_dautorisation) REFERENCES donnes_dotorisation(cin, code_dautorisation),
   FOREIGN KEY(nom_dep) REFERENCES departement(nom_dep)
);
--
-- Table structure for table `carte_etudiant`
--
CREATE TABLE carte_etudiant(
   cin VARCHAR(50),
   num_insc VARCHAR(50),
   lib_class VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(cin, num_insc),
   FOREIGN KEY(lib_class) REFERENCES classe(lib_class)
);
--
-- Table structure for table `etudiants`
--

CREATE TABLE etudiants(
   id VARCHAR(50),
   name VARCHAR(50) unique,
   email VARCHAR(50) unique,
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   num_insc VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(cin, num_insc) REFERENCES carte_etudiant(cin, num_insc)
);

--
-- AUTO_INCREMENT for table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
--
-- AUTO_INCREMENT for table `chef_departement`
--
ALTER TABLE `chef_departement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

--
-- Table structure for table `previlege`
--

CREATE TABLE previlege(
   cin VARCHAR(50) NOT NULL,
   code_previlege VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(cin,code_previlege)
);
--
-- Table structure for table `admin`
--

CREATE TABLE admin(
   id VARCHAR(50),
   name VARCHAR(50) unique,
   email VARCHAR(50),
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   code_previlege VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(cin, code_previlege) REFERENCES previlege(cin, code_previlege)
);


--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

--
-- Table structure for table `affiches` Admin
--
CREATE TABLE affiches(
   id VARCHAR(50),
   image VARCHAR(500),
   title VARCHAR(50) NOT NULL,
   description VARCHAR(500) NOT NULL,
   published BOOLEAN,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);



--
-- AUTO_INCREMENT for table `affiche`
--
ALTER TABLE `affiches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;


--
-- Table structure for table `affichesChef` 
--
CREATE TABLE affichesChef(
   id VARCHAR(50),
   image VARCHAR(500),
   title VARCHAR(50) NOT NULL,
   description VARCHAR(500) NOT NULL,
   department VARCHAR(50) NOT NULL,
   classe VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)

);
--
-- AUTO_INCREMENT for table `affichesChef` 
--
ALTER TABLE `affichesChef`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

--
-- Table structure for table `EmploiTemps` 
--
CREATE TABLE EmploiTemps(
   id VARCHAR(50),
   image VARCHAR(500),
   department VARCHAR(50) NOT NULL,
   classe VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);
--
-- AUTO_INCREMENT for table `EmploiTemps` 
--
ALTER TABLE `EmploiTemps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

--
-- Table structure for table `DocumentStudent` 
--
CREATE TABLE DocumentStudent(
   id VARCHAR(50),
   image VARCHAR(500),
   title VARCHAR(50) NOT NULL,
   name VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);
--
-- AUTO_INCREMENT for table `DocumentStudent` 
--
ALTER TABLE `DocumentStudent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
--
-- Table structure for table `DocumentAdmin` 
--
CREATE TABLE DocumentAdmin(
   id VARCHAR(50),
   image VARCHAR(500),
   title VARCHAR(50) NOT NULL,
   name VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);
--
-- AUTO_INCREMENT for table `DocumentStudent` 
--
ALTER TABLE `DocumentAdmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
--
-- Table structure for table `MessageStudents` 
--
CREATE TABLE MessageStudents(
   id VARCHAR(50),
   name VARCHAR(50) NOT NULL,
   cin VARCHAR(50) NOT NULL,
   message VARCHAR(500) NOT NULL,
   classe VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);
--
-- AUTO_INCREMENT for table `MessageStudent` 
--
ALTER TABLE `MessageStudents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
--
-- Table structure for table `MessageChef` 
--
CREATE TABLE MessageChef(
   id VARCHAR(50),
   name VARCHAR(50) NOT NULL,
   message VARCHAR(500) NOT NULL,
   departement VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);
--
-- AUTO_INCREMENT for table `MessageAdmin` 
--
ALTER TABLE `MessageChef`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

--
-- Dumping data  code privilage for register first admin 
--

INSERT INTO `previlege` ( `cin`, `code_previlege`) VALUES ( '04000000', '11111999');


--
-- Dumping data `department` table 
--
INSERT INTO `departement` ( `nom_dep`) VALUES ( 'TI'),('GP'),('AA'),('GM'),('GE');
--
-- Dumping data `classe` table 
--
INSERT INTO `classe` ( `lib_class`,`nom_dep`) VALUES ( 'TI11','TI'),( 'DSI2','TI'),( 'DSI3','TI');
