const BitcoinCoin = () => {
  return (
    <div className="relative w-24 h-24 mx-auto my-6">
      <style>
        {`
          @keyframes rotate-coin {
            100% {
              transform: rotateY(360deg);
            }
          }

          .bitcoin-coin {
            font-size: 96px;
            width: 0.1em;
            height: 1em;
            background: linear-gradient(#faa504, #141001);
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            animation: rotate-coin 7s infinite linear;
            transform-style: preserve-3d;
          }

          .bitcoin-coin .side,
          .bitcoin-coin:before,
          .bitcoin-coin:after {
            content: "";
            position: absolute;
            width: 1em;
            height: 1em;
            overflow: hidden;
            border-radius: 50%;
            right: -0.4em;
            text-align: center;
            line-height: 1;
            transform: rotateY(-90deg);
            backface-visibility: hidden;
          }

          .bitcoin-coin .tails,
          .bitcoin-coin:after {
            left: -0.4em;
            transform: rotateY(90deg);
          }

          .bitcoin-coin:before,
          .bitcoin-coin:after {
            background: linear-gradient(#faa504, #141001);
            backface-visibility: hidden;
            transform: rotateY(90deg);
          }

          .bitcoin-coin:after {
            transform: rotateY(-90deg);
          }

          .svg-back {
            transform: scaleX(-1);
          }
        `}
      </style>
      <div className="bitcoin-coin">
        <div className="side">₿</div>
        <div className="tails">₿</div>
      </div>
    </div>
  );
};

export default BitcoinCoin;
