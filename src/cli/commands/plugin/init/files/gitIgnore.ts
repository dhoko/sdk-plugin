import { outdent } from 'outdent';

import type { TemplateFile } from '@strapi/pack-up';

const gitIgnoreFile: TemplateFile = {
  name: '.gitignore',
  contents: outdent`
    # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

    ############################
    # OS X
    ############################
    
    .DS_Store
    .AppleDouble
    .LSOverride
    Icon
    .Spotlight-V100
    .Trashes
    ._*
    
    
    ############################
    # Linux
    ############################
    
    *~
    
    
    ############################
    # Windows
    ############################
    
    Thumbs.db
    ehthumbs.db
    Desktop.ini
    $RECYCLE.BIN/
    *.cab
    *.msi
    *.msm
    *.msp
    
    
    ############################
    # Packages
    ############################
    
    *.7z
    *.csv
    *.dat
    *.dmg
    *.gz
    *.iso
    *.jar
    *.rar
    *.tar
    *.zip
    *.com
    *.class
    *.dll
    *.exe
    *.o
    *.seed
    *.so
    *.swo
    *.swp
    *.swn
    *.swm
    *.out
    *.pid
    

    ############################
    # Logs and databases
    ############################
    
    .tmp
    *.log
    *.sql
    *.sqlite
    *.sqlite3
    

    ############################
    # Misc.
    ############################
    
    *#
    ssl
    .idea
    nbproject
    .tsbuildinfo
    .eslintcache
    .env


    ############################
    # Strapi
    ############################

    public/uploads/*
    !public/uploads/.gitkeep


    ############################
    # Build
    ############################

    dist
    build
    

    ############################
    # Node.js
    ############################
    
    lib-cov
    lcov.info
    pids
    logs
    results
    node_modules
    .node_history
    

    ############################
    # Package managers
    ############################
    
    .yarn/*
    !.yarn/cache
    !.yarn/unplugged
    !.yarn/patches
    !.yarn/releases
    !.yarn/sdks
    !.yarn/versions
    .pnp.*
    yarn-error.log
    
    
    ############################
    # Tests
    ############################
    
    coverage
    `,
};

export { gitIgnoreFile };
