// provides methods for performing DNS lookups and resolving domain names into IP addresses
const dns = require('dns');

// Define the domain name to lookup
const domainName = 'google.com';

// Perform a DNS lookup for the domain
dns.lookup(domainName, (err, address, family) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The IP address of ${domainName} is ${address}`);
  }
});



// In the example above, we require the dns module and use the lookup() method to perform a DNS lookup for the domain name google.com. The lookup() method takes three arguments: the domain name to lookup, a callback function to handle the lookup result, and an optional options object.

// The callback function is called with three arguments: an error object (if any), the resolved IP address, and the IP version (IPv4 or IPv6). In this example, we simply print the resolved IP address to the console.