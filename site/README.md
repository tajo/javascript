This is based on the [react-dnd](https://github.com/gaearon/react-dnd) website, which is based on the [fixed-data-table](https://github.com/facebook/fixed-data-table) website.

[Dan Abramov](http://github.com/gaearon) gave me a permission to use it for this project. Thank you!

Checkout the generated web: [http://www.dzejes.cz](http://www.dzejes.cz)

Local development:

```
git clone git@github.com:tajo/javascript.git
cd javascript
npm install
npm start
```

After it builds the static site (might take about half a minute), open [http://localhost:8080](http://localhost:8080).

For publishing you have to update constants in `/scripts/publishStaticSite.sh` and run:

```
npm run publish-site
```

