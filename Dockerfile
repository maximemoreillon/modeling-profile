FROM nginx
COPY . /usr/share/nginx/html
ARG CI_COMMIT_SHORT_SHA
RUN echo ${CI_COMMIT_SHORT_SHA}
RUN sed -i 's|{{CI_COMMIT_SHORT_SHA}}|'${CI_COMMIT_SHORT_SHA}'|g' /usr/share/nginx/html/index.html
