# Gebruik een bestaande PHP-image met Apache als basis
FROM php:8.2-apache

# Installeer PHP-extensies en andere benodigde pakketten
RUN apt-get update && \
    apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Stel de werkdirectory in binnen de container
WORKDIR /var/www/html

# Kopieer de inhoud van je Laravel-project naar de container
COPY . .

# Installeer afhankelijkheden met Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer install --no-interaction --optimize-autoloader --no-dev

# Genereer een nieuwe applicatie sleutel
RUN php artisan key:generate

# Stel de juiste rechten in
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

# Expose poort 80 om de webserver te kunnen bereiken
EXPOSE 80

# Start de Apache-webserver
CMD ["apache2-foreground"]
