/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Описывает отзыв. */
export interface Feedback {
  /**
   * Идентификатор отзыва.
   * @format int32
   */
  id: number;
  /** Ссылка на страницу отзыва. */
  url: string;
  /** Автор отзыва. */
  author: string;
  /** Текст отзыва. */
  content: string;
  /** Массив тегов. */
  tags: Tag[];
  /**
   * Дата публикации, ISO 8601.
   * @format date-time
   */
  date_published: string;
}

/** Описывает фильтр по формату. */
export interface FeedbacksFilterFormat {
  /**
   * Идентификатор формата.
   * @format int32
   */
  id: number;
  /** Название формата. */
  name: string;
}

/** Описывает фильтр по предмету. */
export interface FeedbacksFilterSubject {
  /**
   * Идентификатор предмета.
   * @format int32
   */
  id: number;
  /** Название предмета. */
  name: string;
}

/** Описывает доступные фильтры отзывов. */
export interface FeedbacksFilters {
  /** Массив предметов для фильтра отзывов. */
  subjects?: FeedbacksFilterSubject[];
  /** Массив форматов для фильтра отзывов. */
  formats?: FeedbacksFilterFormat[];
}

/** Описывает список отзывов. */
export interface FeedbacksList {
  /** Массив отзывов. */
  feedbacks?: Feedback[];
  /**
   * Количество отзывов. Может не совпадать с массивом выше, если ответ лимитирован.
   * @format int32
   */
  count?: number;
}

/** Описывает критерии для поиска отзывов. */
export interface FeedbacksSearchParams {
  /** Только опубликованные отзывы. */
  is_published?: boolean;
  /**
   * Идентификатор предмета, с которым связан отзыв.
   * @format int32
   */
  subject?: number;
  /**
   * Тип формата:
   *  * 1 - Онлайн
   *  * 2 - Очно
   *  * 3 - В записи
   * @format int32
   */
  format?: 0 | 1 | 2 | 3;
  /**
   * Количество выдаваемых элементов. Максимум 20.
   * @format int32
   */
  limit?: number;
  /**
   * Смещение относительно 0 элемента при выдаче результата.
   * @format int32
   */
  offset?: number;
}

export interface GetFeedbacksFiltersResponse {
  /** Описывает статус ответа. */
  status: ResponseStatus;
  /** Описывает доступные фильтры отзывов. */
  feedbacks_filters?: FeedbacksFilters;
}

export interface GetFeedbacksListRequest {
  /** Описывает критерии для поиска отзывов. */
  feedbacks_search_params: FeedbacksSearchParams;
}

export interface GetFeedbacksListResponse {
  /** Описывает статус ответа. */
  status: ResponseStatus;
  /** Описывает список отзывов. */
  feedbacks_list?: FeedbacksList;
}

/** Описывает статус ответа. */
export interface ResponseStatus {
  /**
   * Код ответа:
   *  * 0 - Неуспешный.
   *  * 1 - Успешный.
   * @format int32
   */
  code: 0 | 1;
  /** Сообщение с деталями ответа. */
  message?: string;
}

/** Описывает тег. */
export interface Tag {
  /** Название тега. */
  name: string;
}
