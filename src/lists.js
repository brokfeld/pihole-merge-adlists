const lists = [];

lists.push(`https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts`);
lists.push(`http://sysctl.org/cameleon/hosts`);
lists.push(`https://s3.amazonaws.com/lists.disconnect.me/simple_tracking.txt`);
lists.push(`https://s3.amazonaws.com/lists.disconnect.me/simple_ad.txt`);
lists.push(`https://raw.githubusercontent.com/RPiList/specials/master/Blocklisten/Win10Telemetry`);
lists.push(`https://raw.githubusercontent.com/RPiList/specials/master/Blocklisten/Phishing-Angriffe`);
lists.push(`https://raw.githubusercontent.com/RPiList/specials/master/Blocklisten/easylist`);
lists.push(`https://raw.githubusercontent.com/RPiList/specials/master/Blocklisten/Fake-Science`);
lists.push(`https://raw.githubusercontent.com/RPiList/specials/master/Blocklisten/spam.mails`);
lists.push(`https://raw.githubusercontent.com/RPiList/specials/master/Blocklisten/notserious`);
lists.push(`https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/android-tracking.txt`);

//CNAME Trackers
lists.push(`https://raw.githubusercontent.com/AdguardTeam/cname-trackers/master/combined_disguised_trackers_justdomains.txt`);

module.exports = lists;
