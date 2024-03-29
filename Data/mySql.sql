CREATE TABLE Quran(
    AyahId VARCHAR(256) NOT NULL PRIMARY KEY,
    AyahText VARCHAR(65535) NOT NULL,
    Ayah INTEGER(9) NOT NULL,
    Page INTEGER(9) NOT NULL, 
    Surah INTEGER(9) NOT NULL,
    Juz INTEGER(9) NOT NULL
);

CREATE TABLE QuranTranslations(
    TranslationId VARCHAR(256) NOT NULL PRIMARY KEY,
    AyahId VARCHAR(256) NOT NULL,
    FOREIGN KEY(AyahId) REFERENCES Quran(AyahId),
    TranslationName VARCHAR(256),
    TranslationText VARCHAR(65535),
    TranslationLanguage VARCHAR(256),
    Ayah INTEGER(9) NOT NULL,
    Page INTEGER(9) NOT NULL,
    Surah INTEGER(9) NOT NULL,
    Juz INTEGER(9) NOT NULL
);

CREATE TABLE Prefixes(
    id INTEGER(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    guild VARCHAR(64) NOT NULL,
    prefix VARCHAR(64) NOT NULL
);

INSERT INTO Prefixes(guild, prefix) VALUES('0','~');

CREATE TABLE Narrations(
    NarrationId VARCHAR(256) NOT NULL PRIMARY KEY, 
    Reference VARCHAR(256) NOT NULL,
    NarrationType VARCHAR(256) NOT NULL,
    Page INTEGER(11) NOT NULL,
    Book INTEGER(11) NOT NULL,
    Hadith INTEGER(11) NOT NULL
);



SELECT `Prefixes`.`id`,
    `Prefixes`.`guild`,
    `Prefixes`.`prefix`
FROM `sys`.`Prefixes`;
