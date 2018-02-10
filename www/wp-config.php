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
define('DB_NAME', 'blog_local');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'db');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define( 'WP_MEMORY_LIMIT', '256M' );

define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?tnU,mEidJrUh|96[n|d +v#:US2j?zVFO>t*]a(M8{KY?CL>&}=A`@O/in+MTwO');
define('SECURE_AUTH_KEY',  'yw6;KFJ/*X06Q4RQ&:$]4-vkmJfTB_>NeSVnGN3t?(Q]|etx|?xJ+|wC5`*ONm3+');
define('LOGGED_IN_KEY',    'IrP-Ea~K?=w]nK9PZ]WwzCW>[,GrcK>Mo}Jw*9!uuo6)ZMgq|*,f]!v=p4ZI-^A;');
define('NONCE_KEY',        'Kb+xyxpWBZ8WbVZ0N^J7XH%^OI*iT(Ey%x 0~PUB{Zz^x7?hLTW~5|N1fXp($QRD');
define('AUTH_SALT',        'M#^li[w6gs:kt5mPOl`HRHSina7TG*WJx`(3?G_ut@dU?@CX#1h<TWj-;S.0:|CG');
define('SECURE_AUTH_SALT', 'z|-slvR]c?vqkelMh=iL/nOYW>lZ$.-~IXOm$C!N3q9RRwT|R%qs:79!wCp{5ekU');
define('LOGGED_IN_SALT',   'shv[?E1r8ST_vUT#{.=&yb<1,*A*a|8[@Uq8RL99q,nR+LHLe9FR``NNA)p)C.Y-');
define('NONCE_SALT',       '=t0>Lpqlha|St0PwqwzDc):U1znAg &B(dE~#&v$I{9hVS@)ruq*? ~~69E]3IN}');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
