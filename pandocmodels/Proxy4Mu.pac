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
    if (shExpMatch(url,"*sxu.edu.cn*") ||
        isInNet(dnsResolve(host), "172.21.0.0", "255.255.0.0")||
        isInNet(myIpAddress(), "172.21.169.0", "255.255.255.0") ||
        isInNet(myIpAddress(), "172.21.168.0", "255.255.255.0") ||
        dnsDomainIs(host,"acs.org")||
        dnsDomainIs(host,"sciencedirect.com")||
        dnsDomainIs(host,"wiley.com")||
        dnsDomainIs(host,"rsc.org")||
        dnsDomainIs(host,"springer.com")||
        dnsDomainIs(host,"nature.com")||
        dnsDomainIs(host,"sciencemag.org")||
        dnsDomainIs(host,"scitation.org")||
        dnsDomainIs(host,"arxiv.org") ||
        dnsDomainIs(host,"chemrxiv.org") ||
        dnsDomainIs(host,"figstatic.com") ||
        dnsDomainIs(host,"live.com") ||
        dnsDomainIs(host,"overleaf.com") ||
        dnsDomainIs(host,"orcid.org") ||
        dnsDomainIs(host,"manuscriptcentral.com") ||
        dnsDomainIs(host,"aps.org")) {
            return "PROXY 127.0.0.1:8122; PROXY 127.0.0.1:8126; DIRECT";
        };
    return "DIRECT";
}
