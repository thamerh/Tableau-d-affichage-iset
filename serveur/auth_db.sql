
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
-- Table structure for table `carte_etudiant`
--

CREATE TABLE carte_etudiant(
   num_insc INT,
   cin VARCHAR(50),
   classe VARCHAR(50),
   PRIMARY KEY(num_insc, cin)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Table structure for table `etudiants`
--
CREATE TABLE `etudiants`(
   id VARCHAR(50),
   name VARCHAR(50),
   email VARCHAR(50),
   num_insc INT NOT NULL,
   cin VARCHAR(50) NOT NULL,
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(num_insc, cin) REFERENCES carte_etudiant(num_insc, cin)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;
-- AUTO_INCREMENT for table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
