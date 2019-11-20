import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './modal/modal.module';
import { HttpModule } from "@angular/http";
import { TimeagoModule } from 'ngx-timeago';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { HomeComponent } from './home/home.component';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { PrivateNavComponent } from './private-nav/private-nav.component';
import { ProfileAreaComponent } from './profile-area/profile-area.component';
import { TileMenuComponent } from './tile-menu/tile-menu.component';
//import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { SearchResultListItemComponent } from './search-result-list-item/search-result-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { CoverpicComponent } from './coverpic/coverpic.component';
import { ModalComponent } from './modal/modal.component';
//import { CarouselModule } from 'angular4-carousel';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { CapturePicComponent } from './capture-pic/capture-pic.component';
import { StoriesComponent } from './stories/stories.component';
import { MarketComponent } from './market/market.component';
import { PeopleComponent } from './people/people.component';
import { FriendRequestPendingListComponent } from './friend-request-pending-list/friend-request-pending-list.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { VideoComponent } from './video/video.component';
import { AvchatComponent } from './avchat/avchat.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { VideoPlayerComponent } from './video-player/video-player.component';;
import { AdComponent } from './ad/ad.component';
import { VideoAlbumIconComponent } from './video-album-icon/video-album-icon.component';
import { VideoIconComponent } from './video-icon/video-icon.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { AudioIconComponent } from './audio-icon/audio-icon.component';
import { AudioAlbumIconComponent } from './audio-album-icon/audio-album-icon.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosIconComponent } from './photos-icon/photos-icon.component';
import { PhotosAlbumIconComponent } from './photos-album-icon/photos-album-icon.component';
import { PhotosCarouselComponent } from './photos-carousel/photos-carousel.component';
import { MusicListComponent } from './music-list/music-list.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StoryBoxComponent } from './story-box/story-box.component';
import { FeeditemComponent } from './feeditem/feeditem.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommentitemComponent } from './commentitem/commentitem.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemTileComponent } from './item-tile/item-tile.component';
import { CartTileComponent } from './cart-tile/cart-tile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { PreviewComponent } from './preview/preview.component';


import { ChatSearchPipe } from './pipes/chat-search.pipe';
import { PhotosSearchPipe } from './pipes/photos-search.pipe';
import { AlbumSearchPipe } from './pipes/album-search.pipe';
import { AudioSearchPipe } from './pipes/audio-search.pipe';
import { VideoSearchPipe } from './pipes/video-search.pipe';

import { ColorPickerModule } from 'ngx-color-picker';
import { ImageCropperModule } from 'ngx-image-cropper';

import { RouteinfoService } from '../app/services/shareobject/routeinfo.service';
import { ModalService } from '../app/modal/modal.service';
import { Globals } from './globals/global';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    SignupComponent,
    ControlMessagesComponent,
    HomeComponent,
    PublicNavComponent,
    PrivateNavComponent,
    ProfileAreaComponent,
    TileMenuComponent,
    //ChatPanelComponent,
    InfoPanelComponent,
    SearchResultListItemComponent,
    ProfileComponent,
    CoverpicComponent,
    ModalComponent,
    ImageCropperComponent,
    CapturePicComponent,
    FriendRequestPendingListComponent,
    ChatComponent,
    ChatItemComponent,
    ChatSearchPipe,
    ChatWindowComponent,
    VideoComponent,
    AvchatComponent,
    EntertainmentComponent,
    VideoPlayerComponent,
    AdComponent,
    VideoAlbumIconComponent,
    AlbumSearchPipe,
    VideoIconComponent,
    VideoSearchPipe,
    MusicPlayerComponent,
    AudioIconComponent,
    AudioAlbumIconComponent,
    AudioSearchPipe,
    PhotosComponent,
    PhotosIconComponent,
    PhotosAlbumIconComponent,
    PhotosSearchPipe,
    PhotosCarouselComponent,
    MusicListComponent,
    VideoListComponent,
    StoriesComponent,
    StoryBoxComponent,
    FeeditemComponent,
    CheckinComponent,
    CommentBoxComponent,
    CommentitemComponent,
    MarketComponent,
    AddItemComponent,
    ItemTileComponent,
    CartTileComponent,
    CheckoutComponent,
    AddressInfoComponent,
    PaymentInfoComponent,
    PeopleComponent,
    NotificationListComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAyu8WfrIIx0RTy0DQ3pP78FuCdtDl7l9Y",
      libraries: ["places"]
    }),
    TimeagoModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ImageCropperModule,
    //CarouselModule,
    ColorPickerModule
   // AngularFontAwesomeModule
  ],
  providers: [RouteinfoService, ModalService, Globals],
  entryComponents: [AppComponent, LoginComponent, SignupComponent, PhotosCarouselComponent, MusicListComponent, VideoListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
