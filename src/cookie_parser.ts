const getCookie = (name: string) => {
    const cookies =
        'SID=OggVCqroCh0aQ;IrYyIcicAr0-CdgTPbuin2pjF_5F88L7kdgkpauAw9Ip-m3SGWHL_glTA.; APISID=WnxmjWl76wwD_hBd/AVsZzUCn6LcYFivdv; SAPISID=aPxP14qgax6ouhkF/Aiz6TnOsekbak7yhd; __Secure-1PAPISID=aPxP14qgax6ouhkF/Aiz6TnOsekbak7yhd; __Secure-3PAPISID=aPxP14qgax6ouhkF/Aiz6TnOsekbak7yhd; OTZ=6715243_72_72__72_; 1P_JAR=2022-10-20-14; SIDCC=AIKkIs0Cuz10EOMb-pZpf6BNWfIzEU1KZYbq_pVAQLNSjKGv4u_jh6R4kJ72rwWm1Csv0mY07k';
    const cookie = cookies.match(
        new RegExp(`\\b${name}=(.+?)(?:(?:;\\s)|$)`, 'i')
    );
    return cookie ? cookie[1] : '';
};

console.log(getCookie('SIDCC'));
