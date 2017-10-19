package ambe.com.vn.moki.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.view.ViewPager;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import com.infideap.drawerbehavior.AdvanceDrawerLayout;

import java.util.ArrayList;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.adapters.MenuMainAdapter;
import ambe.com.vn.moki.adapters.PagerTrangChuAdapter;
import ambe.com.vn.moki.fragments.ProductMainFragment;
import ambe.com.vn.moki.fragments.TinTucFragment;
import ambe.com.vn.moki.fragments.TrangChuFragment;
import ambe.com.vn.moki.utils.Utils;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    public static final String PREF_USER_FIRST_TIME = "user_first_time";
    public static boolean is_grid=true;
    FragmentManager fragmentManager;
    private Toolbar toolbar;
    private FloatingActionButton fab;
    private AdvanceDrawerLayout drawer;
    private NavigationView navigationView;
    private boolean isUserFirstTime;
    private ImageView imgShell;
    private ListView listMenu;
    private ArrayList<ambe.com.vn.moki.models.MenuItem> arrMenuItem;
    private MenuMainAdapter menuAdapter;
    public ImageView img_message,img_notification,img_changeview,img_search;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        isUserFirstTime = Boolean.valueOf(Utils.readSharedSetting(MainActivity.this, PREF_USER_FIRST_TIME, "true"));

        Intent introIntent = new Intent(MainActivity.this, IntroActivity.class);
        introIntent.putExtra(PREF_USER_FIRST_TIME, isUserFirstTime);

        if (isUserFirstTime)
            startActivity(introIntent);

        setContentView(R.layout.activity_main);




        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("");


        img_changeview=(ImageView)findViewById(R.id.img_changeview);
        img_search=(ImageView)findViewById(R.id.img_search);
        img_message=(ImageView)findViewById(R.id.img_message);
        img_notification=(ImageView)findViewById(R.id.img_notification);
        imgShell = findViewById(R.id.img_shell);

        img_notification.setOnClickListener(this);
        img_message.setOnClickListener(this);
        img_search.setOnClickListener(this);
        img_changeview.setOnClickListener(this);
        imgShell.setOnClickListener(this);

        drawer = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        toolbar.setNavigationIcon(R.drawable.icon_menu);
        drawer.addDrawerListener(toggle);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        fragmentManager = getSupportFragmentManager();
        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
        fragmentManager.beginTransaction().replace(R.id.frame_main, trangChuFragment).commit();
        listMenu = findViewById(R.id.list_menu);
        arrMenuItem = new ArrayList<ambe.com.vn.moki.models.MenuItem>();
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.setting_home_icon, getString(R.string.trang_chu), 1));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_news_normal, getString(R.string.tin_tuc), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_like_normal, getString(R.string.danh_sach_yeu_thich), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_exhibit_normal, getString(R.string.danh_sach_ban), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.product_price_total, getString(R.string.danh_sach_mua), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_charity, getString(R.string.tu_thien), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_setting_normal, getString(R.string.thiet_lap), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_contact_normal, getString(R.string.trung_tam_ho_tro), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.setting_account_icon, getString(R.string.gioi_thieu_moki), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_logout_normal, getString(R.string.dang_nhap), 0));
        menuAdapter = new MenuMainAdapter(arrMenuItem, this);
        listMenu.setAdapter(menuAdapter);


        addEvents();
        drawer.useCustomBehavior(Gravity.START);
        drawer.useCustomBehavior(Gravity.END);


    }

    private void addEvents() {
        listMenu.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                switch (i) {
                    case 0:
                        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
                        fragmentManager.beginTransaction().replace(R.id.frame_main, trangChuFragment).commit();
                        drawer.closeDrawer(GravityCompat.START);
                        for (int j=0;j<arrMenuItem.size();j++){
                            if (j != i){
                                arrMenuItem.get(j).setCheck(0);
                            } else {
                                arrMenuItem.get(i).setCheck(1);
                            }
                            menuAdapter.notifyDataSetChanged();
                        }


                        break;
                    case 1:
                        TinTucFragment tinTucFragment = TinTucFragment.newInstance();
                        fragmentManager.beginTransaction().replace(R.id.frame_main, tinTucFragment).commit();
                        drawer.closeDrawer(GravityCompat.START);

                        for (int j=0;j<arrMenuItem.size();j++){
                            if (j != i){
                                arrMenuItem.get(j).setCheck(0);
                            } else {
                                arrMenuItem.get(i).setCheck(1);
                            }

                            menuAdapter.notifyDataSetChanged();
                        }

                        break;
                }
            }
        });
    }

    @Override
    public void onBackPressed() {
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.img_search:
                Toast.makeText(MainActivity.this,"search",Toast.LENGTH_LONG).show();
                break;
            case R.id.img_message:
                Toast.makeText(MainActivity.this,"message",Toast.LENGTH_LONG).show();
                break;
            case R.id.img_changeview:
                Toast.makeText(MainActivity.this,"changeview",Toast.LENGTH_LONG).show();
                if(is_grid){

                    img_changeview.setImageResource(R.drawable.icon_grid);
                    Fragment fragment=getSupportFragmentManager().findFragmentById(R.id.frame_main);
                    PagerTrangChuAdapter adapter= (PagerTrangChuAdapter) ((TrangChuFragment)fragment).vPagerTrangChu.getAdapter();
                    adapter.notifyDataSetChanged();
                    ViewPager lay=((TrangChuFragment)fragment).vPagerTrangChu;
                    int current=0;
                    if(lay.getCurrentItem()!=-1){
                        current=lay.getCurrentItem();
                    }
                    Fragment fragment1=adapter.getItem(current);


                   fragment1.getChildFragmentManager().beginTransaction().setCustomAnimations( R.animator.card_flip_right_in, R.animator.card_flip_right_out,
                            R.animator.card_flip_left_in, R.animator.card_flip_left_out).replace(R.id.pager_xanhdo,new ProductMainFragment()).commit();


                    is_grid=false;




                }else{

                    img_changeview.setImageResource(R.drawable.tutorial_change_viewmode);
                    Fragment fragment=getSupportFragmentManager().findFragmentById(R.id.frame_main);
                    PagerTrangChuAdapter adapter= (PagerTrangChuAdapter) ((TrangChuFragment)fragment).vPagerTrangChu.getAdapter();

                    ViewPager lay=((TrangChuFragment)fragment).vPagerTrangChu;
                    int current=0;
                    if(lay.getCurrentItem()!=-1){
                        current=lay.getCurrentItem();
                    }
                    Fragment fragment1=adapter.getItem(current);
                    Log.d("bundle",is_grid+"");
                    adapter.notifyDataSetChanged();
                    fragment1.getChildFragmentManager().beginTransaction().setCustomAnimations( R.animator.card_flip_left_in , R.animator.card_flip_left_out,R.animator.card_flip_right_in, R.animator.card_flip_right_out
                           ).replace(R.id.pager_xanhdo,new ProductMainFragment()).commit();

                    is_grid=true;

                }
                break;
            case R.id.img_notification:
                Toast.makeText(MainActivity.this,"notification",Toast.LENGTH_LONG).show();
                break;
            case R.id.img_shell:
                Toast.makeText(MainActivity.this,"shell",Toast.LENGTH_LONG).show();
                break;
        }

    }
}
