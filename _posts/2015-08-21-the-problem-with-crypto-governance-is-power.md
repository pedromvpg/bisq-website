---
layout: post
title: The Problem with Crypto Governance is Power
author: Manfred Karrer
banner: null
---
<p>The really interesting problem in the recent Bitcoin crisis is not the block size debate. Nearly everyone
  <a href="https://scalingbitcoin.org/" target="_blank">agrees</a> that there is need for a solution, but the consensus ends there. The form that the solution should take – and even the urgency of the problem itself – are still both hotly debated.
</p>
<p>The more interesting problem is the little-discussed shift in governance model that some would like to see take place. Bitcoin&#8217;s current governance is based on consensus, but Bitcoin XT proponents would like to see it shift to a
  <a href="https://bitcoinxt.software/faq.html#who-is-involved" target="_blank">benevolent dictatorship of sorts</a>.
</p>
<p>The benevolent dictatorship model is used in many software projects, is widely accepted, and works well. But Bitcoin is not a usual software project. It&#8217;s a decentralized, censorship-resistant currency with a market capitalization of several billion.</p>
<h3>How Power Happens</h3>
<p>To place a single person in the role of central decision-maker of Bitcoin would create an unpredictable, massive risk for that person, as well as the currency itself.</p>
<p>Imagine Bitcoin scales to become a globally-used currency with orders of magnitude more market capitalization than it has today. Bitcoin&#8217;s “benevolent dictator” – whomever it happened to be – would not be able to withstand the pressure that such a position would bring. No one could.</p>
<p>What kind of pressure would this be? When one individual&#8217;s actions have the power to affect billions of dollars worth of other peoples&#8217; outcomes, that person becomes a magnet for bidders looking to purchase the most favorable outcome – for themselves. The actions of Bitcoin&#8217;s benevolent dictator would truly be up to the highest bidder or the most coercive criminal or government.</p>
<p>So we have a contradiction: those who argue for more scalability – the XTers – want to implement an even
  <em>more vulnerable bottleneck</em> to scalability. This single-person bottleneck is such a fundamental deviation from Bitcoin&#8217;s
  <strong>constitutional values</strong> of <strong>decentralization</strong> and
  <strong>censorship-resistance</strong> that the author of this article would switch to using alternative cryptocurrencies.
</p>
<p>Most interesting to me is that the block size and fork debates have revealed how human nature responds to power. Even if the involved actors solve the current problem, it will not be the last time that Bitcoin is challenged by a non-technical, existential crisis. Many of us prefer to avoid confronting old ugly politics, but despite our best efforts, they&#8217;ve found us anyway.</p>
<h3>How to Create &amp; Maintain Decentralization</h3>
<p>The current <a href="https://lists.linuxfoundation.org/pipermail/bitcoin-dev/" target="_blank">consensus</a>-based
  <a href="https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki">governance process in Bitcoin</a> is far from perfect: there is still only a relatively
  <a href="https://bitcoin.org/en/development#coredev">small group of people</a> who are able to make decisions. The primary lesson from this crisis, then, should be how to improve that model.
</p>
<p>A better model may be similar to what young nation-states do: set up constitutions and impose structures to prevent deviation from the founding ideas. But is that the only way to go? Is it healthy and future-proof for a project to gain so much power that imposed structures are required to make changes more and more difficult? Imposed structures which attract more and more bidders looking to buy influence as the project gets bigger? Is this inherently political environment inevitable, or are there other ways out?</p>
<p>
  <strong>I propose an alternative, one which was not possible before cryptocurrency: let us support a network of many smaller currencies instead of following the ideas of a single, dominant one.</strong>
</p>
<h3>The Domino Effect as a Sign of Centralization</h3>
<p>Isn&#8217;t it ludicrous that the current Bitcoin crisis is affecting nearly all other cryptocurrencies as well? It reminds one of the 2008 financial crisis, in which the failure of one institution was deemed a systemic threat to the entire global financial structure.</p>
<p>But supporting a network of smaller cryptocurrencies would relieve the political pressure of trying to have “one true blockchain.” It would create and maintain actual decentralization in money. Releasing Bitcoin&#8217;s political burden as a multi billion dollar asset will also make space for innovation. Even the pressure of governmental intervention can be mitigated by distributing its impact across the entire cryptocucrrency sphere, where a single failure doesn&#8217;t cause systemic risk for the whole ecosystem.</p>
<p>Now to the caveats of my proposed solution: using a multitude of smaller cryptocurrencies is not the sort of system we are used to. Historically people haven&#8217;t preferred to deal with multiple currencies. But the problems of a multi-currency ecosystem can be solved when we have near-frictionless, automated, and trust-free exchanges.</p>
<p>And it just so happens that crypto currencies can provide all of those things.</p>
<h3>The Solution Stack</h3>
<p>An <a href="https://bitcointalk.org/index.php?topic=193281.0" target="_blank">atomic cross-chain exchange</a> is a
  <a href="https://github.com/TierNolan/bips/blob/bip4x/bip-atom.mediawiki">possible</a>
  <a href="http://www.coincer.org/2015/01/27/atomic-protocol-1/">solution</a>. It currently lacks decentralized implementation, however. If you need to support multiple blockchains, you cannot easily build a P2P system which scales. Additionally,
  <a href="http://mercuryex.com/" target="_blank">Mercury</a> is an implementation which uses servers to overcome that particular problem.
</p>
<p>But there is another possible solution which fulfills the requirements of a fully decentralized exchange without suffering from usability and resource problems. The full nodes of various blockchains need to support the features required for the exchange protocol. If a cryptocurrency implementation does not provide those features, an extension would need to be built for the original full nodes which adds those features.</p>
<p>The users supporting the exchange would then be incentivized to run these nodes, which would be fully compatible with the original node but offer an additional feature set. This is similar to the model Bitcoin XT uses (added UTXO support for Lighthouse). Tasks of a server can instead be executed by an unlimited set of P2P nodes. The
  <strong>node extensions</strong> might look similar to blockchain APIs, but come as a wrapper around the original full node of a given blockchain.
</p>
<h3>Application Example</h3>
<p>Imagine a
  <strong>multi-currency wallet</strong> with 10 or 20 different coins, where you can decide what percentage to assign to which currency in your portfolio. It would conceptually be more similar to a stock portfolio than a traditional wallet. You could use trading agents/bots to get the best exchange rates, and your trades could be executed automatically in the background using the atomic cross chain exchange protocol.
</p>
<p>If a merchant only accepts one coin, and you don&#8217;t happen to own that coin, you could simply buy it on the exchange market. The time it would take to wait for a confirmation could be mitigated by services that offer zero-confirmation transactions (e.g. using reputation or security deposits).</p>
<p>Note that this scenario lacks a dominant currency. This is not a problem. It actually liberates coin projects from bearing the burden of having too much power, with the regrettably attendant need for increasingly strict and complex governance models.</p>
<p>In this scenario, centrally-controlled currencies which used a benevolent dictatorship model would not be able to cause systemic risk, because a multitude of independent currencies exist as alternatives. People don&#8217;t care if a restaurant is run by a benevolent dictator or by a collective of employees, correct? As long as there are competing restaurants to choose from and no monopoly or cartel controlling the market, the governance model of individual businesses doesn&#8217;t really matter.</p>
<h3>An <em>Actual</em> Internet of Money</h3>
<p>The solution discussed here would get us closer to something like a real Internet of money. Just as the browser was the tool connecting content and later applications together, a multi-currency wallet with an atomic cross-chain exchange would be the tool to
  <strong>connect various flavors of cryptocurrency</strong>. As fast and as simple as it is to click links from one webpage to another, so too could it be to exchange one coin for another. It should be kind of a no-brainer, really.
</p>
<h3>Governance and Politics</h3>
<p>We can never escape from the realm of politics and the need for governance, but when we are able to reduce the power we&#8217;re exposed to, power&#8217;s attendant problems become easier to handle.</p>
<p>If you are a software developer, you already know this: if a problem is getting too difficult, you try to break it up into several smaller pieces. You divide and conquer. Decouple dependencies. Avoid god classes. Because small is beautiful.</p>
<p>However you describe this form of problem solving, it&#8217;s nothing new. Only the tools are new. And they&#8217;re more favorable to us now than anyone could have ever imagined.</p>
