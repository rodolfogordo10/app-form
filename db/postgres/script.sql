CREATE SCHEMA formschema;

CREATE TABLE formschema.form (
    "formid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "color" TEXT,
    "observation" TEXT,
    "createdat" TEXT NOT NULL,
    CONSTRAINT "PK_Form" PRIMARY KEY ("formid")
);
