$(document).ready(function(){

    //flag for section clicks
    var sectionFlag=null;

    //cache default text for Office section
    var defaultText = $('p#defaultTextPhotoGallery');

    //cache main section changers for photos
    var changeSection1 = $("ul li#changeSectionTitle1");
    var changeSection2 = $("ul li#changeSectionTitle2");
    var changeSection3 = $("ul li#changeSectionTitle3");

    //cache titles for every main photo section
    var titleSection1 = $("p#titleFirstSection");
    var titleSection2 = $("p#titleSecondSection");
    var titleSection3 = $("p#titleThirdSection");

    //cache image buttons for each section
    var section1Buttons = $("ul.btnsSection1 li");
    var section2Buttons = $("ul.btnsSection2 li");
    var section3Buttons = $("ul.btnsSection3 li");

    //cache first white button from every section
    var btnSection1 = $("ul.btnsSection1 li#activateOnSectionChange1");
    var btnSection2 = $("ul.btnsSection2 li#activateOnSectionChange2");
    var btnSection3 = $("ul.btnsSection3 li#activateOnSectionChange3");

    //cache container text for each floor
    var containerText = $('div.containerTextPhotoGallery');

    //cache container that is the placeholder for pictures being loaded
    var containerPictures1stFloor = $('div.containerPhotos1stFloor');

    //cache all images inside the container
    var pictures1stFloor = $('div.containerPhotos1stFloor img')

    console.log(btnSection1);
    console.log(btnSection2);
    console.log(btnSection3);

    //get reference to current active element
    var elementActiveSection = $('li.activeSectionButton');
    var elementActivePicture = $('li.activeSection');

    var changeSectionTitle = function(flag){
        switch(flag){
            case 'section1' :
                $(titleSection1).fadeIn('fast');
                $(defaultText).hide();
                $(titleSection2).hide();
                $(titleSection3).hide();
            break;
            case 'section2':
                $(titleSection2).fadeIn('fast');
                $(defaultText).hide();
                $(titleSection1).hide();
                $(titleSection3).hide();
            break;
            case 'section3' :
                $(titleSection3).fadeIn('fast');
                $(defaultText).hide();
                $(titleSection1).hide();
                $(titleSection2).hide();
            break;
        }
    }

    var changeMenuElementSectionPicture = function(buttonSection, flagSection){
        $(buttonSection).click(function(){
            elementActivePicture.attr('class', 'inactiveSection');
            $(this).attr('class','activeSection');
            elementActivePicture = $(this); //this is now the activeElement

            //get element index - the index will be used to match the index for the image in the pictures collection and thus display the appropriate image for this button
            var elementIndex = $(this).index();
            console.log(elementIndex);

            switch(flagSection){ //this flag indicates the section we are on - this will prevent the loading of pictures that do not belong to a certain section
                case 1:
                    $(containerText).empty();
                    $(pictures1stFloor).hide();
                    $(containerPictures1stFloor).fadeIn('slow').show();
                    $(pictures1stFloor).eq(elementIndex).fadeIn('slow').show();
                break;
                case 2:

                break;
                case 3:

                break;
            }


        });
    }

    var changeMenuElementSectionMain = function(buttonMainSection){
        $(buttonMainSection).click(function(){
            elementActiveSection.attr("class","inactiveSectionButton");
            $(this).attr("class","activeSectionButton");
            elementActiveSection = $(this);
            $(containerPictures1stFloor).empty();
        });
    }

    changeSection1.click(function(){
        sectionFlag = 'section1';
        changeSectionTitle(sectionFlag);
        $(btnSection1).attr('class', 'activeSection');
        elementActivePicture.attr('class', 'inactiveSection');
        elementActivePicture = $(btnSection1);

        $(containerText).empty();
        $(containerText).html('<p>After the symbolical entrance,</p><p> "Beware of Geeks" you discover<p> <p>the wooden desks, the administrative</p> <p>office and a conference room.</p>');
    });

    changeSection2.click(function(){
        sectionFlag = 'section2';
        changeSectionTitle(sectionFlag);
        $(btnSection2).attr('class', 'activeSection');
        elementActivePicture.attr('class', 'inactiveSection');
        elementActivePicture = $(btnSection2);

        $(containerText).empty();
        $(containerText).html('<p>The 2&#39;nd floor is an open space with</p> <p>modern furniture pieces and a central</p> <p> area designed for meditation.</p> <p>The piece de resistance is an industrial</p> <p>fan in the conference room.</p>');
    });

    changeSection3.click(function(){
        sectionFlag = 'section3';
        changeSectionTitle(sectionFlag);
        $(btnSection3).attr('class', 'activeSection');
        elementActivePicture.attr('class', 'inactiveSection');
        elementActivePicture = $(btnSection3);

        $(containerText).empty();
        $(containerText).html('<p>Finally you reach the cafe attic,</p> <p>our playground, which underlines the</p> <p>idea of "global awareness" by the</p> <p>diversity and complexity of sizes all</p> <p>gathered in a single entity.</p>');
    });

    changeMenuElementSectionMain($(changeSection1));
    changeMenuElementSectionMain($(changeSection2));
    changeMenuElementSectionMain($(changeSection3));

    changeMenuElementSectionPicture($(section1Buttons), 1);
    changeMenuElementSectionPicture($(section2Buttons), 2);
    changeMenuElementSectionPicture($(section3Buttons), 3);
});