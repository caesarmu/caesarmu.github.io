function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();
    if (dnsDomainIs(host,"google.com")  ||
        dnsDomainIs(host,"facebook.com") ||
        dnsDomainIs(host,"github.com") ||
        dnsDomainIs(host,"github.global.ssl.fastly.net") ||
        dnsDomainIs(host,"go-xyz.xyz")) {
            return "PROXY 127.0.0.1:8123; DIRECT";
    }
    if (isInNet(myIpAddress(), "172.21.168.0", "255.255.255.0") ||
        dnsDomainIs(host,"sxu.edu") ||
        isInNet(myIpAddress(), "172.21.169.0", "255.255.255.0")) {
            return "PROXY 127.0.0.1:8126; 127.0.0.1:8122; DIRECT";
    }
    return "DIRECT";
}
