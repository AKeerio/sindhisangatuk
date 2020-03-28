import React, { Fragment } from "react";
import Media from "react-media";
import { ReactComponent as LogoSVG } from "./logo.svg";

export default function Logo() {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={200}
                viewBox="0 0 5090 5380"
                preserveAspectRatio="xMidYMid meet"
              >
                <LogoSVG />
              </svg>
            )}
            {matches.medium && (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={300}
                height={300}
                viewBox="0 0 5090 5380"
                preserveAspectRatio="xMidYMid meet"
              >
                <LogoSVG />
              </svg>
            )}
            {matches.large && (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={400}
                height={400}
                viewBox="0 0 5090 5380"
                preserveAspectRatio="xMidYMid meet"
              >
                <LogoSVG />
              </svg>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}
