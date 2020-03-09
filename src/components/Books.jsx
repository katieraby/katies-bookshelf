import React, { Component } from "react";
import BookList from "./BookList";

class Books extends Component {
  state = {
    booksToRead: [
      {
        kind: "books#volume",
        id: "exgMbbOgQugC",
        etag: "0MXpL/KWCBE",
        selfLink: "https://www.googleapis.com/books/v1/volumes/exgMbbOgQugC",
        volumeInfo: {
          title: "La Mécanique du coeur",
          authors: ["Mathias Malzieu"],
          publisher: "Flammarion",
          publishedDate: "2011-08-12T00:00:00+02:00",
          description:
            "Édimbourg, 1874. Jack naît le jour le plus froid du monde et son cœur en reste gelé. Mi-sorcière mi-chaman, la sage-femme qui aide à l'accouchement parvient à sauver le nourrisson en remplaçant le cœur défectueux par une horloge. Cette prothèse ...",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9782081236684"
            },
            {
              type: "ISBN_10",
              identifier: "2081236680"
            }
          ],
          readingModes: {
            text: true,
            image: true
          },
          pageCount: 186,
          printType: "BOOK",
          categories: ["Fiction"],
          averageRating: 1.0,
          ratingsCount: 1,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: true,
          contentVersion: "1.28.30.0.preview.3",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=exgMbbOgQugC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=exgMbbOgQugC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=exgMbbOgQugC&printsec=frontcover&hl=&source=gbs_api",
          infoLink:
            "https://play.google.com/store/books/details?id=exgMbbOgQugC&source=gbs_api",
          canonicalVolumeLink:
            "https://play.google.com/store/books/details?id=exgMbbOgQugC"
        },
        layerInfo: {
          layers: [
            {
              layerId: "geo",
              volumeAnnotationsVersion: "39"
            }
          ]
        },
        saleInfo: {
          country: "GB",
          saleability: "FOR_SALE",
          isEbook: true,
          listPrice: {
            amount: 4.99,
            currencyCode: "GBP"
          },
          retailPrice: {
            amount: 4.99,
            currencyCode: "GBP"
          },
          buyLink:
            "https://play.google.com/store/books/details?id=exgMbbOgQugC&rdid=book-exgMbbOgQugC&rdot=1&source=gbs_api",
          offers: [
            {
              finskyOfferType: 1,
              listPrice: {
                amountInMicros: 4990000.0,
                currencyCode: "GBP"
              },
              retailPrice: {
                amountInMicros: 4990000.0,
                currencyCode: "GBP"
              },
              giftable: true
            }
          ]
        },
        accessInfo: {
          country: "GB",
          viewability: "PARTIAL",
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.co.uk/books/download/La_M%C3%A9canique_du_coeur-sample-epub.acsm?id=exgMbbOgQugC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          pdf: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.co.uk/books/download/La_M%C3%A9canique_du_coeur-sample-pdf.acsm?id=exgMbbOgQugC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=exgMbbOgQugC&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "SAMPLE",
          quoteSharingAllowed: false
        }
      },
      {
        kind: "books#volume",
        id: "5QRZ4z6A1WwC",
        etag: "9SDLlkhKsZc",
        selfLink: "https://www.googleapis.com/books/v1/volumes/5QRZ4z6A1WwC",
        volumeInfo: {
          title: "The Fellowship of the Ring",
          authors: ["John Ronald Reuel Tolkien", "Alan Lee"],
          publisher: "HarperCollins UK",
          publishedDate: "2008",
          description:
            "Fantasy fiction. The first ever illustrated paperback of part one of Tolkien's epic masterpiece, The Lord of the Rings, featuring 19 colour paintings by Alan Lee.",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9780007269709"
            },
            {
              type: "ISBN_10",
              identifier: "0007269706"
            }
          ],
          readingModes: {
            text: false,
            image: false
          },
          pageCount: 531,
          printType: "BOOK",
          categories: ["Adventure stories"],
          averageRating: 4.0,
          ratingsCount: 2408,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "preview-1.0.0",
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=5QRZ4z6A1WwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=5QRZ4z6A1WwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=5QRZ4z6A1WwC&printsec=frontcover&hl=&source=gbs_api",
          infoLink:
            "http://books.google.co.uk/books?id=5QRZ4z6A1WwC&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/The_Fellowship_of_the_Ring.html?hl=&id=5QRZ4z6A1WwC"
        },
        saleInfo: {
          country: "GB",
          saleability: "NOT_FOR_SALE",
          isEbook: false
        },
        accessInfo: {
          country: "GB",
          viewability: "PARTIAL",
          embeddable: false,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
          epub: {
            isAvailable: false
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=5QRZ4z6A1WwC&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "SAMPLE",
          quoteSharingAllowed: false
        }
      },
      {
        kind: "books#volume",
        id: "lFhbDwAAQBAJ",
        etag: "tHxYrrGdjxQ",
        selfLink: "https://www.googleapis.com/books/v1/volumes/lFhbDwAAQBAJ",
        volumeInfo: {
          title: "Atomic Habits",
          subtitle:
            "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
          authors: ["James Clear"],
          publisher: "Penguin",
          publishedDate: "2018-10-16",
          description:
            "The instant New York Times bestseller. Over 1 million copies sold! Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit ...",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9780735211308"
            },
            {
              type: "ISBN_10",
              identifier: "0735211302"
            }
          ],
          readingModes: {
            text: true,
            image: false
          },
          pageCount: 320,
          printType: "BOOK",
          categories: ["Business & Economics"],
          averageRating: 4.0,
          ratingsCount: 14,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: true,
          contentVersion: "1.7.4.0.preview.2",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=lFhbDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=lFhbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=lFhbDwAAQBAJ&hl=&source=gbs_api",
          infoLink:
            "http://books.google.co.uk/books?id=lFhbDwAAQBAJ&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/Atomic_Habits.html?hl=&id=lFhbDwAAQBAJ"
        },
        layerInfo: {
          layers: [
            {
              layerId: "geo",
              volumeAnnotationsVersion: "7"
            }
          ]
        },
        saleInfo: {
          country: "GB",
          saleability: "NOT_FOR_SALE",
          isEbook: false
        },
        accessInfo: {
          country: "GB",
          viewability: "NO_PAGES",
          embeddable: false,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: true
          },
          pdf: {
            isAvailable: true
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=lFhbDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "NONE",
          quoteSharingAllowed: false
        }
      },
      {
        kind: "books#volume",
        id: "VJEYgJ305QcC",
        etag: "0V2uYVIPY78",
        selfLink: "https://www.googleapis.com/books/v1/volumes/VJEYgJ305QcC",
        volumeInfo: {
          title: "Invisible Monsters",
          authors: ["Chuck Palahniuk"],
          publisher: "Random House",
          publishedDate: "2011-06-30",
          description:
            "She's a catwalk model who has everything: a boyfriend, a career, a loyal best friend. But when a sudden motor 'accident' leaves her disfigured and incapable of speech, she goes from being the beautiful centre of attention to being an invisible ...",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9781446484005"
            },
            {
              type: "ISBN_10",
              identifier: "1446484009"
            }
          ],
          readingModes: {
            text: true,
            image: false
          },
          pageCount: 304,
          printType: "BOOK",
          categories: ["Fiction"],
          averageRating: 3.5,
          ratingsCount: 69,
          maturityRating: "MATURE",
          allowAnonLogging: true,
          contentVersion: "0.18.9.0.preview.2",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=VJEYgJ305QcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=VJEYgJ305QcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=VJEYgJ305QcC&printsec=frontcover&hl=&source=gbs_api",
          infoLink:
            "https://play.google.com/store/books/details?id=VJEYgJ305QcC&source=gbs_api",
          canonicalVolumeLink:
            "https://play.google.com/store/books/details?id=VJEYgJ305QcC"
        },
        layerInfo: {
          layers: [
            {
              layerId: "geo",
              volumeAnnotationsVersion: "14"
            }
          ]
        },
        saleInfo: {
          country: "GB",
          saleability: "FOR_SALE",
          isEbook: true,
          listPrice: {
            amount: 2.99,
            currencyCode: "GBP"
          },
          retailPrice: {
            amount: 2.99,
            currencyCode: "GBP"
          },
          buyLink:
            "https://play.google.com/store/books/details?id=VJEYgJ305QcC&rdid=book-VJEYgJ305QcC&rdot=1&source=gbs_api",
          offers: [
            {
              finskyOfferType: 1,
              listPrice: {
                amountInMicros: 2990000.0,
                currencyCode: "GBP"
              },
              retailPrice: {
                amountInMicros: 2990000.0,
                currencyCode: "GBP"
              },
              giftable: true
            }
          ]
        },
        accessInfo: {
          country: "GB",
          viewability: "PARTIAL",
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
          epub: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.co.uk/books/download/Invisible_Monsters-sample-epub.acsm?id=VJEYgJ305QcC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=VJEYgJ305QcC&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "SAMPLE",
          quoteSharingAllowed: false
        }
      },
      {
        kind: "books#volume",
        id: "omO0tQEACAAJ",
        etag: "oD3YWZlohRg",
        selfLink: "https://www.googleapis.com/books/v1/volumes/omO0tQEACAAJ",
        volumeInfo: {
          title: "Milk and Honey",
          authors: ["Rupi Kaur"],
          publishedDate: "2018-08-28",
          description:
            "A hardcover gift edition of Milk and Honey, the #1 New York Times bestselling poetry and prose collection by Rupi Kaur, which has sold over 3 million copies worldwide. Milk and Honey is a collection of poetry and prose about survival. About the ...",
          industryIdentifiers: [
            {
              type: "ISBN_10",
              identifier: "1449496369"
            },
            {
              type: "ISBN_13",
              identifier: "9781449496364"
            }
          ],
          readingModes: {
            text: false,
            image: false
          },
          pageCount: 226,
          printType: "BOOK",
          categories: ["Body, Mind & Spirit"],
          averageRating: 3.5,
          ratingsCount: 43,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "preview-1.0.0",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=omO0tQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=omO0tQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=omO0tQEACAAJ&hl=&source=gbs_api",
          infoLink:
            "http://books.google.co.uk/books?id=omO0tQEACAAJ&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/Milk_and_Honey.html?hl=&id=omO0tQEACAAJ"
        },
        saleInfo: {
          country: "GB",
          saleability: "NOT_FOR_SALE",
          isEbook: false
        },
        accessInfo: {
          country: "GB",
          viewability: "NO_PAGES",
          embeddable: false,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: false
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=omO0tQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "NONE",
          quoteSharingAllowed: false
        }
      },
      {
        kind: "books#volume",
        id: "CvRJh3pUWdoC",
        etag: "WEnWLV7TR8Y",
        selfLink: "https://www.googleapis.com/books/v1/volumes/CvRJh3pUWdoC",
        volumeInfo: {
          title: "Le petit prince",
          authors: ["Antoine de Saint-Exupéry"],
          publisher: "Mariner Books",
          publishedDate: "2001",
          description:
            "A small boy learns of the wonders and ironies of life during a celestial odyssey.",
          industryIdentifiers: [
            {
              type: "ISBN_10",
              identifier: "0156013983"
            },
            {
              type: "ISBN_13",
              identifier: "9780156013987"
            }
          ],
          readingModes: {
            text: false,
            image: false
          },
          pageCount: 85,
          printType: "BOOK",
          categories: ["Juvenile Fiction"],
          averageRating: 4.0,
          ratingsCount: 13,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "0.1.1.0.preview.0",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=CvRJh3pUWdoC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=CvRJh3pUWdoC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=CvRJh3pUWdoC&hl=&source=gbs_api",
          infoLink:
            "http://books.google.co.uk/books?id=CvRJh3pUWdoC&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/Le_petit_prince.html?hl=&id=CvRJh3pUWdoC"
        },
        saleInfo: {
          country: "GB",
          saleability: "NOT_FOR_SALE",
          isEbook: false
        },
        accessInfo: {
          country: "GB",
          viewability: "NO_PAGES",
          embeddable: false,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED",
          epub: {
            isAvailable: false
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=CvRJh3pUWdoC&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "NONE",
          quoteSharingAllowed: false
        }
      },
      {
        kind: "books#volume",
        id: "o79lk6nTsRgC",
        etag: "GN1BGn2DwYA",
        selfLink: "https://www.googleapis.com/books/v1/volumes/o79lk6nTsRgC",
        volumeInfo: {
          title: "The Handmaid's Tale",
          authors: ["Margaret Atwood"],
          publisher: "Random House",
          publishedDate: "2012-05-15",
          description:
            "** THE SUNDAY TIMES NO. 1 BESTSELLER ** Discover the dystopian novel behind the award-winning TV series before you read the 2019 Booker Prize-winning sequel The Testaments ‘I believe in the resistance as I believe there can be no light without ...",
          industryIdentifiers: [
            {
              type: "ISBN_13",
              identifier: "9781446485477"
            },
            {
              type: "ISBN_10",
              identifier: "1446485471"
            }
          ],
          readingModes: {
            text: true,
            image: false
          },
          pageCount: 336,
          printType: "BOOK",
          categories: ["Fiction"],
          averageRating: 4.0,
          ratingsCount: 519,
          maturityRating: "NOT_MATURE",
          allowAnonLogging: true,
          contentVersion: "1.33.28.0.preview.2",
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:
            "http://books.google.co.uk/books?id=o79lk6nTsRgC&printsec=frontcover&hl=&source=gbs_api",
          infoLink:
            "https://play.google.com/store/books/details?id=o79lk6nTsRgC&source=gbs_api",
          canonicalVolumeLink:
            "https://play.google.com/store/books/details?id=o79lk6nTsRgC"
        },
        layerInfo: {
          layers: [
            {
              layerId: "geo",
              volumeAnnotationsVersion: "45"
            }
          ]
        },
        saleInfo: {
          country: "GB",
          saleability: "FOR_SALE",
          isEbook: true,
          listPrice: {
            amount: 5.99,
            currencyCode: "GBP"
          },
          retailPrice: {
            amount: 5.99,
            currencyCode: "GBP"
          },
          buyLink:
            "https://play.google.com/store/books/details?id=o79lk6nTsRgC&rdid=book-o79lk6nTsRgC&rdot=1&source=gbs_api",
          offers: [
            {
              finskyOfferType: 1,
              listPrice: {
                amountInMicros: 5990000.0,
                currencyCode: "GBP"
              },
              retailPrice: {
                amountInMicros: 5990000.0,
                currencyCode: "GBP"
              },
              giftable: true
            }
          ]
        },
        accessInfo: {
          country: "GB",
          viewability: "PARTIAL",
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
          epub: {
            isAvailable: true,
            acsTokenLink:
              "http://books.google.co.uk/books/download/The_Handmaid_s_Tale-sample-epub.acsm?id=o79lk6nTsRgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink:
            "http://play.google.com/books/reader?id=o79lk6nTsRgC&hl=&printsec=frontcover&source=gbs_api",
          accessViewStatus: "SAMPLE",
          quoteSharingAllowed: false
        }
      }
    ],
    booksFinished: []
  };

  render() {
    const { booksToRead, booksFinished } = this.state;
    return (
      <section className="bookshelves-container">
        <BookList booksToRead={booksToRead}>
          <h2>Books I want to read:</h2>
        </BookList>
        <BookList booksToRead={booksFinished}>
          <h2>Books I have read:</h2>
        </BookList>
      </section>
    );
  }
}

export default Books;
