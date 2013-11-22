Just run these three commands

    openssl genrsa -out node.key
    openssl req -new -key node.key -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey node.key -out node.crt
    rm csr.pem

This will create your requred certificates and keys.

//AW2CACLGM7A43NGRFREVT43G6LVSOMAWS
