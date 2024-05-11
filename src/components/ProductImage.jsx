import React from 'react';
import CarouselProduct from './CarouselProduct';

const products = {
  femmes: [
    "https://lh3.googleusercontent.com/pw/ADCreHecoh8YFG9DYxBI5mwJFs8m3aemBqDhunRufFW9kochEeQ-pRgvyXb1NT4y-o9morNij775mJRDk5rIqXHInlOkqPDQGWPXWDE5dA8pzdiI5rvam9g=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHd-8CPU2levua6buFu1b7vSkzxqjIKQWXAlInkpbFTlwsfN9kfLxJojB61-im3HqIEuD9Xw_90d7Ntv6SrV2ifeeUuneMsfObyXeCFzwjW05hxf5UU=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHcsUTNFCFLecHAJVIvYbZarvSOAioZsZ9RWz-MJ-tWKFvmONRh2mBdDwowBrbRJPtyoNfEHnyLsnG_g5DRt435yiGqdHrpqGtdNshLJbbsdpmd-QXw=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHck8oulBuyw4LPSEy5zjcLvzv3yFQ2La8ITES1Y0bum8QK79P9d3SLx4ku9ofHqkXDVo4YlECh-_qLyHzZxRZQfKY8xiv-KWPJv-tnm-sNyRrVGzfI=w2400",
  ],
  hommes: [
    
    "https://lh3.googleusercontent.com/pw/ADCreHerw5p8XIt2sb__Pd3iCMXBq10X2UKGpfLq-hdA_RQpbebhbsSlKWPcqoh9IrUlv3fJKkT4sj_x80wgplXiXMFDn7UK2-vrlRvV3jERrZ50WdmeVlU=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHc-f6L5RwqB4aRsLPrVNPVXc4-3IgWIiVoqxHdMu31HPm82zPW6unamPluWsd5QI_6sIKsN5EP3wPuFzyd-MNrxYOIH8dTV7FIqTGQrWAac3A9azAE=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHf35bsnwg3Hwo_XGhp8zDUIOLVcL-JorKiOn1nl-r6qUByMvLGNpWCNWaHSvsjvg0a1zaOHBBJUktVBrFCxv4_2ydkRgCATFQelD11u3CuvoWeRCiU=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHfzpA1gsDuMAm5LH4wWNC6HMoIEOnxE1rzM20RkZMF4EkNT5gDGSLRWNpRVK7dLX3sUx7PMkwjnVSXAS-jVqnNSrIk5tjPPEPoO_LU-9EearHXHZRs=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHf5FbZi-d3YltRd7PAZoEHIaGzPYiXP9pBXcGleIr_ZTHtMTkWkAHiI6vr2-0opQ7Q5Jxq20YCSQ_3E-s7KmAQFdp0fKhx08L8j_mltOfwkKCU4TgE=w2400",
  ],
};

const ProductImage = ({ gender }) => {
  const selectedProducts = gender === 'femmes' ? products.femmes : products.hommes;

  return (
    <div className="w-[100vw] pr-16">
      <CarouselProduct products={selectedProducts} />
    </div>
  );
};

export default ProductImage;
