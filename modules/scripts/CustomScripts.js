import Script from 'next/script';

const CustomScripts = () => (
  <>
    <Script src="/js/jquery.js" strategy="beforeInteractive" />
    <Script src="/js/vendors.min.js" />
    <Script src="/js/main.js" />
  </>
);

export default CustomScripts;
