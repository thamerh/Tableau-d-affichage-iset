
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
   PRIMARY KEY(cin, code_dautorisation)
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
   name VARCHAR(50),
   email VARCHAR(50),
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
-- Table structure for table `notification`
--
CREATE TABLE notification(
   id VARCHAR(50),
   sujet VARCHAR(255),
   createdAt DATETIME NOT NULL,
   lib_class VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(lib_class) REFERENCES classe(lib_class)
);
--
-- Table structure for table `message` inheritance in table `notification`
--
CREATE TABLE message(
   id VARCHAR(50),
   msg TEXT,
   PRIMARY KEY(id),
   FOREIGN KEY(id) REFERENCES notification(id)
);
--
-- Table structure for table `image` inheritance in table `notification`
--
CREATE TABLE image(
   id VARCHAR(50),
   nom_img VARCHAR(250),
   type_img VARCHAR(250),
   demention_h VARCHAR(50),
   dimention_v VARCHAR(50),
   image blob,
   PRIMARY KEY(id),
   FOREIGN KEY(id) REFERENCES notification(id)
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
   name VARCHAR(50),
   email VARCHAR(50),
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
  
   PRIMARY KEY(cin,code_previlege)
);
--
-- Table structure for table `admin`
--

CREATE TABLE admin(
   id VARCHAR(50),
   name VARCHAR(50),
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
-- Table structure for table `etudiants`
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