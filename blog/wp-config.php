<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.#^tMg~8IuY>uX7$mAes_sUlky~~B=N((qOWPXj%r_sqm CiFioQW<x{?Crggv91');
define('SECURE_AUTH_KEY',  'MW<c4r6yxHoq8.U14qb$f7+2FvmrMK+By~^p_wz4X6h?b7[f/wQeM$k@Yhw69T:>');
define('LOGGED_IN_KEY',    '*BneQv#4web.^.|:daP:ZoDt3;zp=5*lSae4k+bHf+,y}06hp>2J1nS-ZG+L9x-N');
define('NONCE_KEY',        '- M[+TUL!VwjL(SRHo3)Of2V2GJGg&.gBNpO4#hP*{txU!_y|/HY@L{6)v.}8|>[');
define('AUTH_SALT',        '6<aTMoPW*p)*?cusWGtQR-bc*M]AE~laxK9m3)z~~g&iE$9^E0@s/2-f5[]&(-[-');
define('SECURE_AUTH_SALT', '-IX0lyaP~c<A]g4SJw?BrSH[^<SHa#Rx-i?4L{$%Z~.fsP^UyD(2NVv}#LF$2u$0');
define('LOGGED_IN_SALT',   'iW|&y+t5cebr`n}{.3G;CIjZ&8UWF}rUchy)+@!RuoT(t*e lZP{~!v(luAB:(,r');
define('NONCE_SALT',       '0[q4H7gd6r8K#>oN>i,c?q+!+UC8SL1oXg3VkLIj]#Yav|98&IhV>j%,Q1H@I.ZH');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_tomhung';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
