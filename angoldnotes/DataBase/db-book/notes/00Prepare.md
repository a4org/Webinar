# Prepare 

##### 00 Jiawei Wang (Angold-4)

## Postgresql

![../../../../2021-12-24/Sources/psql.png](../../../../2021-12-24/Sources/psql.png)

#### 0. Useful Commands
##### Clear Screen
```sql
\! clear
```

##### List All Database
```sql
\l
```

##### List All Tables
```sql
\d
```

##### Connect DB
```sql
\c
```

##### Load SQL
```sql
\i path/to/file.sql
```

#### 1. Open and Create Table
```sql
sudo -u postgres psql postgres

CREATE DATABASE university
```

#### 2. Connect Table
```sql
\c university
```

#### 3. Load Data
```sql
\i DDL.sql

\i largeRelationsInsertFile.sql
```
