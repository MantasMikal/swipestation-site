import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings, MdHome, MdInfoOutline } from "react-icons/md";
import { FaTrophy, FaQuestion } from "react-icons/fa";
import { RiVirusLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";

const hiddenTypes = [
  "category",
  "aboutPage",
  "companyInfo",
  "page",
  "person",
  "post",
  "siteSettings",
  "seo-plugin",
  "contactPage",
  "homePage",
  "award",
  "awards",
  "sponsors",
  "sponsor",
  "caseStudy",
  "faqPage",
  "teamMember",
];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .child(
                  S.editor()
                    .id("homePage")
                    .schemaType("homePage")
                    .documentId("homePage")
                )
                .icon(MdHome),
              S.listItem()
                .title("FAQ's")
                .child(
                  S.editor()
                    .id("faqPage")
                    .schemaType("faqPage")
                    .documentId("faqPage")
                )
                .icon(FaQuestion),
              S.listItem()
                .title("About")
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                )
                .icon(MdInfoOutline),
              S.listItem()
                .title("Covid")
                .child(
                  S.editor()
                    .id("covidPage")
                    .schemaType("page")
                    .documentId("covid")
                )
                .icon(RiVirusLine),
              S.listItem()
                .title("Terms And Conditions")
                .child(
                  S.editor()
                    .id("termsAndConditionsPage")
                    .schemaType("page")
                    .documentId("termsAndConditions")
                ),
            ])
        )
        .icon(RiPagesLine),
      S.listItem()
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts"))
        .icon(FiFileText),
      S.listItem()
        .title("Blog Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
      S.listItem()
        .title("Case Studies")
        .schemaType("caseStudy")
        .child(S.documentTypeList("caseStudy").title("Case Studies")),
      S.listItem()
        .title("Sponsors")
        .schemaType("sponsor")
        .child(S.documentTypeList("sponsor").title("Sponsors")),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
      S.listItem()
        .title("Awards")
        .child(
          S.editor()
            .id("awardsPage")
            .schemaType("awards")
            .documentId("awards")
        )
        .icon(FaTrophy),
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Company Info")
        .child(
          S.editor()
            .id("companyInfo")
            .schemaType("companyInfo")
            .documentId("companyInfo")
        )
        .icon(MdBusiness),
    ]);
