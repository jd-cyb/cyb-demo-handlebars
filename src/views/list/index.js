import $ from 'jquery'
import header from 'views/public/module/header'
import footer from 'views/public/module/footer'
import jumbotron from './module/jumbotron'
import listing from './module/listing'

header($("#js-header"))
footer($("#js-footer"))
jumbotron($("#js-jumbotron"))
listing($("#js-listing"))

