// https://www.random.org/faq/#S1
const Data = [
  {
    question: `I use RANDOM.ORG a lot. How can I show my appreciation?`,
    answer: `Excellent question! We suggest you either register for a RANDOM.ORG account or make a donation to Concern. In case you don't know them, Concern is a charity that helps poor people in the third world achieve self-sustainable improvements in their lifestyles. We recommend them because we agree with their mission statement (which they unfortunately removed as per January 2010, but it used to be here) and because they are pretty efficient compared to many of the other charities we have looked at. If you decide to make a donation to Concern because of RANDOM.ORG, it'd be great if you could tell us about it, since Concern don't automatically do that. (We suppose they have better things to do.) And it makes us so happy!`,
  },
  {
    question: `Is the source code for the generator available?`,
    answer: `Not currently, no. Maybe we'll make it available as open source some day.`,
  },
  {
    question: `Can I download the generator software and run it on my own computer?`,
    answer: `No. It's not just the software you'd need, but also three radios (or one, at any rate), which must be carefully adjusted to pick up atmospheric noise at the right volume. It's not completely trivial to set up.`,
  },
  {
    question: ` Could someone affect the numbers by broadcasting a radio signal?`,
    answer: `RANDOM.ORG uses radio receivers to pick up atmospheric noise, which is then used to generate random numbers. The radios are tuned between stations. A possible attack on the generator is therefore to broadcast on the frequencies that the RANDOM.ORG radios use in order to affect the generator. However, radio frequency attacks of this type would be difficult for a variety of reasons. First, the frequencies that the radios use are not published, so an attacker would have to broadcast across all frequencies of all bands used for FM and AM broadcasting. Second, this is not an attack that can be launched from anywhere in the world, only reasonably close to the generator. RANDOM.ORG currently has radio receivers in several different countries, which would make it difficult to coordinate this type of attack. Third, if an attacker actually did succeed at broadcasting highly regular signals (e.g., perfect sine waves) at exactly the right frequencies from the right locations, then the RANDOM.ORG real-time statistics would pick up the drop in quality very rapidly. In particular, the Source Purity and Information Entropy tests would start failing dramatically, which would raise an alert.`,
  },
  {
    question: `Will RANDOM.ORG be around in X years?`,
    answer: `Probably, depending on your value for X. We have run the service since 1998 with no real interruptions, and it is more popular than ever.`,
  },
  {
    question: `Does RANDOM.ORG perform custom jobs that require randomness?`,
    answer: `Yes. Perhaps you need more numbers than it's possible to get via the web forms, or perhaps you need them in a format that isn't supported. In those cases, we can set up a custom job for you to supply the numbers. We also act as independent observers for drawings and competitions via the Third-Party Draw Service.

    There is typically a charge associated with custom jobs. You can email us for further details.`,
  },
];
export default Data;
