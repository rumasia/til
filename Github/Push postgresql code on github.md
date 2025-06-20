In the postrgesql (pg4Admin)
1. select the db click backup
2. Fill the form :
   Filename:database_dump.sql
   Format :plain
   encoding:UTF8

3. Find the location of db
    find / -name "database_dump.sql" 2>/dev/null (Run in terminal)
    gzip location/database_dump.sql(Run in terminal )
   Create project folder
     mkdir folderName && cd pg-backup
     mv ~/location/database_dump.sql* .
git init
git add database_dump.sql* 
git commit -m "Add PostgreSQL dump"
git remote add origin https://github.com/username/repo.git
git push -u origin main

