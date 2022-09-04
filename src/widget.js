export const init = () => {
  return new Promise((resolve, reject) => {
    // 15-day Free trial key. Will expire on 19 Sep 2022
    const USERSNAP_API_KEY = "30192b9b-34e9-41df-8205-eb536df26578";

    window.onUsersnapCXLoad = function (api) {
      api.init();
    };

    const script = document.createElement("script");
    script.defer = true;
    script.src = `https://widget.usersnap.com/global/load/${USERSNAP_API_KEY}?onload=onUsersnapCXLoad`;
    document.head.appendChild(script);

    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);
  });
};
