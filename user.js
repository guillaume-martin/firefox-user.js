/**
 * user.js
 *
 * Firefox settings for improved secrity and privacy
 */


/*** FIRST PARTY ISOLATION ***/
// Isolates all browser identifier sources (e.g. cookies) to the first party
// domain. Prevents tracking accross domains
user_pref('privacy.firstparty.isolate', true);


/*** FINGERPRINTING ***/
// Makes Firefox more resistant to browser fingerprinting
user_pref('privacy.resistFingerprinting', true);

// Block fingerprinting
user_pref('privacy.trackingprotection.fingerprinting.enabled', true);





// Block cryptomining
user_pref('privacy.trackingprotection.cryptomining.enabled', true);

// Prevent tracking of visitor's clicks
user_pref('browser.send_ping', false);

// Don't save recently closed tabs
user_pref('browser.sessionstore.max_tabs_undo', 0);

// Disable preloading of autocomplete URLs.
user_pref('browser.urlbar.speculativeConnect.enabled', false);

// Disable that websites can get notifications if you copy, paste or cut
// something from a web page.
user_pref('domevent.clipboardevents.enabled', false);

// Disable playback of DRM-controlled HTML5 content, which, if enabled, automatically downloads the Widevine Content Decryption Module provided by Google Inc. 
user_pref('media.eme.enabled', false);

// Disable the Widevine Content Decryption Module provided by Google Inc., used
// for the playback of DRM-controlled HTML5 content
user_pref('media.gmo-widevinecdm.enabled', false);

// Disable tracking of microphone and camera status
user_pref('media.navigator.enabled', false);

// Disable cookies
// 0 = accept all cookies by default
// 1 = only accept from originating site (block third-party cookies)
// 2 = block all cookies by default
user_pref('network.cookie.cookieBehavior', 1);

// Only send referer header when the hostnames match
// 0 = send referer in all cases
// 1 = send referen to same eTLD sites
// 2 = send referer only when the full hostname match
user_pref('network.http.referer.XOriginPolicy', 2);

// When sending referer accross origins, only send scheme, host and port in the
// referer header
// 0 = send full url in referer
// 1 = send url without query string in referer
// 2 = only send scheme, host and port in referer
user_pref('network.http.referer.XOriginTrimmingPolicy', 2);

// Disable WebGL
user_pref('webgl.disabled', true);

// Control when to store extra information about session
// 0 = store extra session data for any site
// 1 = store extra session data for unencrypted sites only
// 2 = never store extra session data
user_pref('browser.sessionstore.privacy_level', 2);

// Not rendering IDNs as their Punycode equivalent leaves you open to phishing 
// attacks that can be very difficult to notice
user_pref('network.IDN_show_punycode', true);


