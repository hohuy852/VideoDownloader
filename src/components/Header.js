import React from "react";
export const Header = () => {
    return (
        <div className="container font-body">
            <div className="nav-bar flex pt-3 " >
                <div className="flex gap-y-2 items-center gap-x-3">
                    <a href="/">
                        <svg width="62" height="44" viewBox="0 0 62 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.08 19.1125C52.4772 18.0616 52.7 16.9125 52.7 15.7143C52.7 10.5089 48.5344 6.28571 43.4 6.28571C41.4916 6.28571 39.7091 6.875 38.2366 7.87679C35.5531 3.1625 30.5447 0 24.8 0C16.2362 0 9.3 7.03214 9.3 15.7143C9.3 15.9795 9.30969 16.2446 9.31937 16.5098C3.89437 18.4446 0 23.6893 0 29.8571C0 37.6652 6.24844 44 13.95 44H49.6C56.4491 44 62 38.3723 62 31.4286C62 25.3491 57.7375 20.2714 52.08 19.1125ZM39.2053 27.8241L28.9947 38.1759C28.3941 38.7848 27.4059 38.7848 26.8053 38.1759L16.5947 27.8241C15.6163 26.8321 16.3137 25.1429 17.6894 25.1429H24.025V14.1429C24.025 13.2786 24.7225 12.5714 25.575 12.5714H30.225C31.0775 12.5714 31.775 13.2786 31.775 14.1429V25.1429H38.1106C39.4862 25.1429 40.1838 26.8321 39.2053 27.8241Z" fill="#6E41E2" />
                        </svg>
                    </a>
                    <span className="font-bold text-2xl ">
                        YoutubeDownloader
                    </span>
                </div>
                <div className="ml-auto">
                    <ul className="flex items-center text-lg gap-x-4">
                        <li></li>
                        <li><a href="/">Youtube Converter</a></li>
                        <li><a href="/">Youtube to Mp3</a></li>
                        <li><a href="/">Language</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

