---
layout: layouts/base.liquid
pagination:
    data: trips
    size: 1
    alias: trip
permalink: "trips/{{ trip.title | slugify }}/"
bodyClass: eve-background
templateEngineOverride: liquid
eleventyComputed:
    title: "{{ trip.title }} trip"
    description: "{{ trip.description }}"
---
{% render "site-header.liquid", logo: 'site-id-purple.svg', menu-link-color: 'purple-600', cta-color: 'purple-800' %}
<main class="wrapper">
    <div class="grid-container align-items-top">
        <div class="grid-container__item-span-4">
            <h1 class="color-purple-900">{{ trip.titleOne }}<br>
                <span class="color-purple-700">{{ trip.titleTwo }}</span>
            </h1>
            <hr class="hr hr--green-500 hr" />
             {% markdown %}{{ trip.description }}{% endmarkdown %}
        </div>
        <div class="grid-container__item-span-4">
{% capture imgUrl %}app/assets/img/{{ trip.img }}{% endcapture %}
{% Image imgUrl, trip.alt, "image-rounded" %}
        </div>
    </div>
    <div class="container-33 text-align-center margin-spacing-b">
        <div class="item-1">
            <h2 class="h3">Length</h2>
            <p>{{trip.daysunit}} days</p>
        </div>
        <div class="item-2">
            <h2 class="h3">Distance</h2>
            <p>{{trip.miles}} miles</p>
        </div>
        <div class="item-3">
            <h2 class="h3">Price</h2>
            <p>From £{{trip.priceFrom}}</p>
        </div>
    </div>
    <div class="margin-spacing-b">
        <div class="grid-container align-items-top">
            <div class="grid-container__item-span-4">
                <h2 class="color-green-900">About this adventure</h2>
                <hr class="hr hr--yellow-500 hr--margin-small" />
                {% markdown %}{{ trip.about }}{% endmarkdown %}
                <div class="margin-spacing-b">
                    <h2 class="color-green-900 ">Highlights</h2>
                    <hr class="hr hr--yellow-500 " />
                <ul>
                {% for hl in trip.highlights %}
                    <li>{% markdown-inline %}{{ hl }}{% endmarkdown-inline %}</li>
                {% endfor %}
                </ul>
                </div>
                <a href="{{trip.bookingLink}}" class="cta cta--no-margin cta--orange cta--with-icon">
                    <i class="icon-trip"></i>Book This Trip
                </a>
            </div>
            <div class="grid-container__item-span-4">
                {% capture imgUrl %}app/assets/img/{{ trip.map.img }}{% endcapture %}
                {% Image imgUrl, "Map of the route", "image-rounded" %}
            </div>
        </div>
    </div>
    <div class="margin-spacing-b">
        <h2 class="color-green-900">Itinerary</h2>
        <hr class="hr hr--yellow-500 hr--margin-small" />
        {%- for day in trip.days  -%}
            <div class="collapsible">
                <button type="button" class="collapsible__button" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="day-{{day.number}}">
                    <h3>Day {{day.number}}: {{day.summary}}</h3>
                    <strong class="collapsible__toggle"><span class="icon icon-chevron collapsible__toggle-icon"></span><span class="collapsible__toggle-text">Show more</span></strong>
                </button>
                <div class="collapsible__content" id="day-{{day.number}}">
                    <div class="grid-container align-items-top">
                        <div class="grid-container__item-span-5">
                            {% markdown-inline %}{{ day.description }}{% endmarkdown-inline %}
                        </div>
                        <div class="grid-container__item-span-3">
                            {% capture imgUrl %}app/assets/img/{{ day.mainImg.src }}{% endcapture %}
                            {% Image imgUrl, day.mainImg.alt, "image-rounded" %}
                        </div>
                    </div>
                    <div class="grid-container align-items-top margin-spacing-b">
                        {% if day.thingsToDo %}
                        <div class="grid-container__item-span-4">
                            <h4 class="margin-bottom-1 color-purple-900">Things to do</h4>
                            <ul class="list-reset">
                                {%- for thing in day.thingsToDo  -%}
                                    <li><span class="icon-{{thing.icon}}"></span>{% markdown-inline %}{{thing.text}}{% endmarkdown-inline %}</li>
                                {%- endfor -%}
                            </ul>
                        </div>
                        {% endif %}
                        {% if day.extras %}
                        <div class="grid-container__item-span-4">
                                <h4 class="margin-bottom-1 color-purple-900">Extras</h4>
                                <ul class="list-reset">
                                    {%- for thing in day.extras  -%}
                                        <li><span class="icon-{{thing.icon}}"></span>{% markdown-inline %}{{thing.text}}{% endmarkdown-inline %}</li>
                                    {%- endfor -%}
                                </ul>
                            {% if day.extrasFindMoreLink %}
                                <p><a href="{{ day.extrasFindMoreLink.url }}" target="_blank">{{ day.extrasFindMoreLink.text }}</a></p>
                            {% endif %}
                        </div>
                        {% endif %}
                    </div>
                    <div class="grid-container align-items-top">
                        {% if day.accomodation %}
                        <div class="grid-container__item-span-3">
                            {% capture imgUrl %}app/assets/img/{{ day.accomodation.img.src }}{% endcapture %}
                            {% Image imgUrl, day.accomodation.img.alt, "image-rounded" %}
                        </div>
                        <div class="grid-container__item-span-5">
                            <h4 class="color-purple-900">Pitch up at <span class="color-purple-600">{{day.accomodation.title}}</span></h3>
                            {% markdown %}{{day.accomodation.description}}{% endmarkdown %}
                        </div>
                        {% endif %}
                        {% if day.finale %}
                        <div class="grid-container__item-span-4">
                            <h4 class="color-purple-900">And finally: {{day.finale.title}}</h3>
                            <p>{{day.finale.description}}</p>
                        </div>
                        <div class="grid-container__item-span-4">
                            {% capture imgUrl %}app/assets/img/{{ day.finale.img.src }}{% endcapture %}
                            {% Image imgUrl, day.finale.img.alt, "image-rounded" %}
                        </div>
                        {% endif %}
                    </div>
                </div>
            </div>
        {%- endfor -%}
        <div class="margin-spacing-b">
            <a href="{{trip.bookingLink}}" class="cta cta--no-margin cta--orange cta--with-icon">
                <i class="icon-trip"></i>Book This Trip
            </a>
            <p>{{ trip.moreinfo }}</p>
        </div>
        {% render "plan-own-adventure.liquid" %}
    </div>
</main>

