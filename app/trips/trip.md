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
        <div class="grid-container__item-span-5">
            <h1 class="color-purple-900">{{ trip.titleOne }}<br>
                <span class="color-purple-700">{{ trip.titleTwo }}</span>
            </h1>
            <hr class="hr hr--green-500 hr" />
            <p>
            {{ trip.description }}
            </p>
        </div>
        <div class="grid-container__item-span-3">
{% capture imgUrl %}app/assets/img/{{ trip.img }}{% endcapture %}
{% Image imgUrl, trip.alt, "image-rounded" %}
        </div>
    </div>
    <div class="container-33 text-align-center margin-spacing-a">
        <div class="item-1">
            <h2 class="h3">Length</h2>
            <p>{{trip.nights}} nights</p>
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
    <div class="margin-spacing-a">
        <h2 class="color-green-900">
                    About this adventure</h2>
            <hr class="hr hr--yellow-500 hr" />
        <p>{{ trip.about }}</p>
        <div class="grid-container">
            <div class="grid-container__item-span-4">
                <h2 class="color-green-900">Highlights</h2>
            <hr class="hr hr--yellow-500 hr" />
                <ul>
                {% for hl in trip.highlights %}
                    <li>{{ hl }}</li>
                {% endfor %}
                </ul>
            <a href="" target="_blank" class="cta cta--no-margin cta--orange cta--with-icon">
                <i class="icon-trip"></i>Book This Trip
            </a>
            </div>
            <div class="grid-container__item-span-4">
                {% capture imgUrl %}app/assets/img/{{ trip.map.img }}{% endcapture %}
                {% Image imgUrl, "Map of the route", "rotate-143  image-rounded" %}
            </div>
        </div>
    </div>
    <div class="margin-spacing-a">
        <h2 class="color-green-900">Itinerary</h2>
        <hr class="hr hr--yellow-500 hr" />
        {%- for day in trip.days  -%}
            <div class="collapsible">
                <button type="button" class="collapsible__button" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="day-{{day.number}}">
                    <h3>Day {{day.number}}: {{day.summary}}</h3>
                    <strong class="collapsible__toggle"><span class="icon icon-chevron collapsible__toggle-icon"></span>Show more</strong>
                </button>
                <div class="collapsible__content" id="day-{{day.number}}">
                    <div class="grid-container align-items-top">
                        <div class="grid-container__item-span-5">
                            {% markdown %}{{ day.description }}{% endmarkdown %}
                        </div>
                        <div class="grid-container__item-span-3">
                            {% capture imgUrl %}app/assets/img/{{ day.mainImg.src }}{% endcapture %}
                            {% Image imgUrl, day.mainImg.alt, "image-rounded" %}
                        </div>
                        {% if day.thingsToDo %}
                        <div class="grid-container__item-span-4">
                            <h4>Things to do</h4>
                            <ul>
                                {%- for thing in day.thingsToDo  -%}
                                    <li><span class="icon-{{thing.icon}}"></span>{{thing.text}}</li>
                                {%- endfor -%}
                            </ul>
                        </div>
                        {% endif %}
                        {% if day.extras %}
                        <div class="grid-container__item-span-4">
                                <h4>Extras</h4>
                                <ul>
                                    {%- for thing in day.extras  -%}
                                        <li><span class="icon-{{thing.icon}}"></span>{{thing.text}}</li>
                                    {%- endfor -%}
                                </ul>
                        </div>
                        {% endif %}
                        {% if day.accomodation %}
                        <div class="grid-container__item-span-4">
                            <h4>Where you'll lay your head</h3>
                            <h5>{{day.accomodation.title}}</h4>
                            <p>{{day.accomodation.description}}</p>
                        </div>
                        <div class="grid-container__item-span-4">
                            {% capture imgUrl %}app/assets/img/{{ day.accomodation.img.src }}{% endcapture %}
                            {% Image imgUrl, day.accomodation.img.alt, "image-rounded" %}
                        </div>
                        {% endif %}
                        {% if day.finale %}
                        <div class="grid-container__item-span-4">
                            <h4>And finally</h3>
                            <h5>{{day.finale.title}}</h4>
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
    </div>
</main>

